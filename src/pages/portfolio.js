import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectCard {
        nodes {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          description
          githubUrl
          id
          siteUrl
          title
          tag
        }
      }
    }
  `)

  const projects = data.allProjectCard.nodes
  return (
    <Layout currentPage="portfolio" pageMainHeader="Portfolio">
      <main className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-header-title">Work</h2>
          <h3 className="portfolio-header-subtitle">
            Here are a few projects I've worked on recently
          </h3>
        </header>
        <section className="portfolio-card-container">
          {projects.map(project => (
            <article key={project.id} className="portfolio-card--article">
              <div className="portfolio-card">
                <Img
                  fluid={project.image.childImageSharp.fluid}
                  alt="A corgi smiling happily"
                  className="portfolio-image"
                />
                <div className="portfolio-card--overlay">
                  <div className="portfolio-card--overlay-text">
                    <h3 className="portfolio-card--overlay-text-title">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.siteUrl}
                    className="primary button portfolio-card--overlay-button"
                  >
                    Go to site
                  </a>
                </div>
              </div>
              <div className="portfolio-card--description blog-post--main-section">
                <h1>{project.title}</h1>
                <p className="flex-stretch">{project.description}</p>
                <p>Technology: {project.tag.join(", ")}</p>
                <div className="portfolio-card--link">
                  <a href={project.githubUrl} className="padding-right">
                    View on github
                  </a>
                  <a href={project.siteUrl}>Go to site</a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export default Portfolio
