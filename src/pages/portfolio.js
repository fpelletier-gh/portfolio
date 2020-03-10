import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "note-app-img-landing.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout currentPage="portfolio" pageMainHeader="Portfolio">
      <main className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-header-title">Work</h2>
            <h3 className="portfolio-header-subtitle">Here are a few projects I've worked on recently</h3>
        </header>
        <section className="portfolio-card-container">
          <div className="portfolio-card">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
              className="portfolio-image"
            />
            <div className="portfolio-card--overlay">
              <div className="portfolio-card--overlay-text">
                <h3 className="portfolio-card--overlay-text-title">Note-app</h3>
                <p className="portfolio-card--overlay-description">
                  A open source note taking Progressive Web Application build with Gatsby
                </p>
              </div>
              <a
                href="https://musing-benz-14f443.netlify.com/"
                className="primary button portfolio-card--overlay-button"
              >
                Go to site
              </a>
            </div>
          </div>
          <div className="portfolio-card">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
              className="portfolio-image"
            />
            <div className="portfolio-card--overlay">
              <div className="portfolio-card--overlay-text">
                <h3 className="portfolio-card--overlay-text-title">Note-app</h3>
                <p className="portfolio-card--overlay-description">
                  A open source PWA build with Gatsby
                </p>
              </div>
              <a
                href="https://musing-benz-14f443.netlify.com/"
                className="primary button portfolio-card--overlay-button"
              >
                Go to site
              </a>
            </div>
          </div>
          <div className="portfolio-card">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
              className="portfolio-image"
            />
            <div className="portfolio-card--overlay">
              <div className="portfolio-card--overlay-text">
                <h3 className="portfolio-card--overlay-text-title">Note-app</h3>
                <p className="portfolio-card--overlay-description">
                  A open source PWA build with Gatsby
                </p>
              </div>
              <a
                href="https://musing-benz-14f443.netlify.com/"
                className="primary button portfolio-card--overlay-button"
              >
                Go to site
              </a>
            </div>
          </div>
          <div className="portfolio-card">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
              className="portfolio-image"
            />
            <div className="portfolio-card--overlay">
              <div className="portfolio-card--overlay-text">
                <h3 className="portfolio-card--overlay-text-title">Note-app</h3>
                <p className="portfolio-card--overlay-description">
                  A open source PWA build with Gatsby
                </p>
              </div>
              <a
                href="https://musing-benz-14f443.netlify.com/"
                className="primary button portfolio-card--overlay-button"
              >
                Go to site
              </a>
            </div>
          </div>
          <div className="portfolio-card">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"
              className="portfolio-image"
            />
            <div className="portfolio-card--overlay">
              <div className="portfolio-card--overlay-text">
                <h3 className="portfolio-card--overlay-text-title">Note-app</h3>
                <p className="portfolio-card--overlay-description">
                  A open source PWA build with Gatsby
                </p>
              </div>
              <a
                href="https://musing-benz-14f443.netlify.com/"
                className="primary button portfolio-card--overlay-button"
              >
                Go to site
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Portfolio
