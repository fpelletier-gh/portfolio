import React from "react"
import twitterIcon from "../../images/twitter-icon.svg"
import linkedinIcon from "../../images/linkedin-icon.svg"
import githubIcon from "../../images/github-icon.svg"

const Footer = () => {
  return (
    <footer className="main-section--footer">
      <div className="footer-social-media--link">
        <a href="https://github.com/fpelletier-gh/" title="Github">
          <img
            src={githubIcon}
            alt="Twitter Icon"
            className="social-media-icon"
          />
        </a>
        <a href="https://twitter.com/FrankPellet" title="Twitter">
          <img
            src={twitterIcon}
            alt="Twitter Icon"
            className="social-media-icon"
          />
        </a>
        <img
          src={linkedinIcon}
          alt="Twitter Icon"
          className="social-media-icon"
        />
      </div>
      <div className="footer-copywright-text">Francis Pelletier©2020</div>
    </footer>
  )
}

export default Footer
