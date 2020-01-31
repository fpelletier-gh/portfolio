import React from "react"
import SideMenuToggleButton from './sideMenuToggleButton'
import { Link } from "gatsby"

const MainNavigation = ({ currentPage, handleSideMenuToggleButton }) => {
  return (
    <nav className="main-navigation">
      <SideMenuToggleButton handleSideMenuToggleButton={handleSideMenuToggleButton}/>
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
            currentPage === "portfolio"
              ? "main-navigation--list-item current-page--link"
              : "main-navigation--list-item"
          }
        >
          <Link to="/portfolio" className="primary-button">
            Portfolio
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
