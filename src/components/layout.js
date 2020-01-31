import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"
import MainNavigation from "./layout/mainNavigation"
import BackgroundSection from "./layout/backgroundSection"
import "./layout.scss"
import Footer from "./layout/footer"
import SideMenu from "./layout/sideMenu"
import Backdrop from "./layout/backdrop"

const Layout = ({ children, currentPage, pageMainHeader }) => {
  const [sideMenuToggle, setSideMenuToggle] = useState(false)

  const handleSideMenuToggleButton = () => {
    setSideMenuToggle(!sideMenuToggle)
  }

  const handleBackdropClick = () => {
    setSideMenuToggle(false)
  }

  useEffect(() => {
    if (sideMenuToggle) {
      document.querySelector("body").className = "noscroll"
    } else {
      document.querySelector("body").className = ""
    }
  }, [sideMenuToggle])

  return (
    <BackgroundSection
      className={
        currentPage === "index"
          ? "background-image"
          : "background-image background-image--small"
      }
    >
      {sideMenuToggle ? (
        <Backdrop handleBackdropClick={handleBackdropClick} />
      ) : null}
      <SideMenu currentPage={currentPage} sideMenuToggle={sideMenuToggle} />
      <div
        className={
          currentPage === "index"
            ? "header-container background-image--big"
            : "header-container background-image--small"
        }
      >
        <MainNavigation
          title=""
          currentPage={currentPage}
          handleSideMenuToggleButton={handleSideMenuToggleButton}
        />
        {currentPage === "index" ? (
          children
        ) : (
          <h1 className="secondary-header">{pageMainHeader}</h1>
        )}
      </div>
      {currentPage === "index" ? null : (
        <div className="main-section--grid">
          {children}
          <Footer />
        </div>
      )}
    </BackgroundSection>
  )
}

export default Layout
