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
          <h1 className="primary-header grid-area-primary-header">
            I <span className="secondary-text-color">Build</span>
          </h1>
          <h1 className="primary-header grid-area-secondary-header">
            And <span className="secondary-text-color">Design</span>
          </h1>
          <h2 className="header">Useful Things for the Web</h2>
          <Link
            to="/portfolio"
            className="primary-button hvr-sweep-to-right"
          >
            My Work
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Index
