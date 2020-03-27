const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const projects = require("./content/projects/projects.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Create projects node
const IMAGE_PATH = "./src/images/"

/**
 * Create custom PortfolioCard nodes.
 * Some processing is needed for the tags because the colors are stored in
 * another json file.
 *
 * We also need to 'trick' the sharp transformer to process the image file
 * by building a node with the structure of a File.
 * @see https://stackoverflow.com/a/56012718
 */
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach(card => {
    const { title, description, image, alt, siteUrl, githubUrl, tag } = card

    // name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image)
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image)

    // this data corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    }

    // build and create the image node
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      internal: {
        type: "ProjectCardImage",
        contentDigest: createContentDigest(data),
      },
    }

    actions.createNode(imageNode)

    const node = {
      title,
      description,
      // when imageNode is created, the sharp plugin adds childImageSharp to the node
      // so it will be available under the `image` field.
      image: imageNode,
      alt,
      siteUrl,
      githubUrl,
      tag,
      id: createNodeId(`card-${title}`),
      internal: {
        type: "ProjectCard",
        contentDigest: createContentDigest(card),
      },
    }

    actions.createNode(node)
  })
}
