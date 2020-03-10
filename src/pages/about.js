import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout currentPage="about">
      <main className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-header-title">About</h2>
        </header>
        <section className="contact">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum ullam est rem magnam obcaecati enim inventore nisi quisquam
            laboriosam.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
