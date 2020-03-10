import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout currentPage="contact">
      <main className="portfolio-container">
        <header className="portfolio-header">
          <h2 className="portfolio-header-title">Contact me</h2>
          <h3 className="portfolio-header-subtitle">
            Have a question or want to work together?
          </h3>
        </header>
        <section className="contact">
          <form action="#" className="contact-form">
            <label htmlFor="name" className="contact-form--label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="contact-form--input contact-form--name"
              placeholder="Name"
            />
            <label htmlFor="email" className="contact-form--label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="contact-form--input contact-form--email"
              placeholder="Email"
            />
            <label htmlFor="message" className="contact-form--label">
              Message
            </label>
            <textarea
              className="contact-form--message"
              id="message"
              placeholder="Message"
              cols="40"
              rows="10"
            ></textarea>
            <button className="contact-form--submit-button hvr-sweep-to-right">
              Submit
            </button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
