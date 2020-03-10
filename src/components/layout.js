import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"
import MainNavigation from "./layout/mainNavigation"
import { useScrollPosition } from "./hooks/useScrollPosition"
import "./layout.scss"
import Footer from "./layout/footer"
import SideMenu from "./layout/sideMenu"
import Backdrop from "./layout/backdrop"

const Layout = ({ children, currentPage }) => {
  const [sideMenuToggle, setSideMenuToggle] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

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
    <div className="site-container">
      {sideMenuToggle ? (
        <Backdrop handleBackdropClick={handleBackdropClick} />
      ) : null}
      <SideMenu currentPage={currentPage} sideMenuToggle={sideMenuToggle} />
      <MainNavigation
        title=""
        currentPage={currentPage}
        sideMenuToggle={sideMenuToggle}
        handleSideMenuToggleButton={handleSideMenuToggleButton}
        hideOnScroll={hideOnScroll}
      />
      {children}
      {currentPage === "index" ? null : <Footer />}
    </div>
  )
}

export default Layout
