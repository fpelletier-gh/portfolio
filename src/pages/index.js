import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout currentPage="index">
      <SEO title="All posts" />
      <main className="landing-page">
        <div className="landing-page--center-section">
          <h1 className="primary-header">
            Hi i'm{" "}
            <span className="secondary-text-color">Francis Pelletier</span>
          </h1>
          <h2 className="header">Front-end web developer</h2>
          <Link
            to="/portfolio"
            className="landing-page--portfolio-button primary-button"
          >
            Portfolio
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Index
