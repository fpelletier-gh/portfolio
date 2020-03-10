import React from "react"
import { Link } from "gatsby"

const SideMenu = ({ sideMenuToggle, currentPage }) => {
  let sideMenuClasses = "side-menu"

  if (sideMenuToggle) {
    sideMenuClasses = "side-menu open"
  }

  return (
    <nav className={sideMenuClasses}>
      <ul className="side-menu--list">
        <li className="side-menu--list-items">
          <Link
            to="/"
            className={
              currentPage === "index"
                ? "side-menu--link current-page--side-menu-link"
                : "side-menu--link"
            }
          >
            Home
          </Link>
        </li>
        <li className="side-menu--list-items">
          <Link
            to="/about"
            className={
              currentPage === "about"
                ? "side-menu--link current-page--side-menu-link"
                : "side-menu--link"
            }
          >
            About
          </Link>
        </li>
        <li className="side-menu--list-items">
          <Link
            to="/portfolio"
            className={
              currentPage === "portfolio"
                ? "side-menu--link current-page--side-menu-link"
                : "side-menu--link"
            }
          >
            Work
          </Link>
        </li>
        <li className="side-menu--list-items">
          <Link
            to="/blog"
            className={
              currentPage === "blog"
                ? "side-menu--link current-page--side-menu-link"
                : "side-menu--link"
            }
          >
            Blog
          </Link>
        </li>
        <li className="side-menu--list-items">
          <Link
            to="/contact"
            className={
              currentPage === "contact"
                ? "side-menu--link current-page--side-menu-link"
                : "side-menu--link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default SideMenu
