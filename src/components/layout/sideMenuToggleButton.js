import React from "react"

const SideMenuToggleButton = ({  handleSideMenuToggleButton }) => {
  return (
    <button
      className="main-navigation--menu-toggle-button"
      onClick={handleSideMenuToggleButton}
    >
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </button>
  )
}

export default SideMenuToggleButton
