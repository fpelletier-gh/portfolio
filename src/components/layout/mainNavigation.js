import React from "react"
import SideMenuToggleButton from "./sideMenuToggleButton"
import { Link } from "gatsby"

const MainNavigation = ({
  currentPage,
  sideMenuToggle,
  handleSideMenuToggleButton,
  hideOnScroll,
}) => {
  return (
    <nav
      className={
        currentPage === "index"
          ? "main-navigation landing-navigation-display"
          : sideMenuToggle
          ? "main-navigation show-main-navigation"
          : hideOnScroll
          ? "main-navigation show-main-navigation main-navigation-box-shadow"
          : "main-navigation hide-main-navigation"
      }
    >
      <div className="main-navigation--logo">
        <Link to="/about" className="primary-button" title="About me">
          Francis <span className="secondary-text-color">Pelletier</span>
        </Link>
      </div>
      <SideMenuToggleButton
        handleSideMenuToggleButton={handleSideMenuToggleButton}
      />
      <ul className="main-navigation--list">
        <li
          className={
            currentPage === "index"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/" className="primary-button">
            Home
          </Link>
        </li>
        <li
          className={
            currentPage === "about"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/about" className="primary-button">
            About
          </Link>
        </li>
        <li
          className={
            currentPage === "portfolio"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/portfolio" className="primary-button">
            Work
          </Link>
        </li>
        <li
          className={
            currentPage === "blog"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/blog" className="primary-button">
            Blog
          </Link>
        </li>
        <li
          className={
            currentPage === "contact"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/contact" className="primary-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
