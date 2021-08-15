import React, { useState } from "react"
import { Link } from "gatsby"

const Header = props => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = e => setMobileMenu(!mobileMenu)
  return (
    <header>
      <div id="purpleBar"></div>
      <div className="container">
        {/* Actual Menu*/}
        <nav>
          <h3>
            {/*purposfully using <a> instead of <Link> because when hosted on netlify weird bug returns An unexpected error has occurred. only for "/" route */}
            <a className="nav-logo" href="/">
              thinksousvide.com
            </a>
          </h3>
          <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
            <li className="nav-link">
              <a
                className={mobileMenu ? "nav-text_black" : "nav-text_white"}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-link">
              <Link
                className={mobileMenu ? "nav-text_black" : "nav-text_white"}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className={mobileMenu ? "nav-text_black" : "nav-text_white"}
                href="/submit-font"
              >
                Submit a Font
              </Link>
            </li>
          </ul>
        </nav>
        {/*Mobile Menu Utilities*/}
        <div id="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          id="close-menu"
          className={mobileMenu ? "open" : ""}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
        </div>
        <a
          href="#"
          id={mobileMenu ? "overlay" : ""}
          className="overlay-text"
          onClick={toggleMenu}
        >
          Close
        </a>
      </div>
    </header>
  )
}

export default Header
