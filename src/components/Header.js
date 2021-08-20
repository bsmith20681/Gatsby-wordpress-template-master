import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/thinksousvide-logo.png"

const Header = props => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = e => setMobileMenu(!mobileMenu)
  const handleKeyPress = e => (e.key === 27 ? setMobileMenu(!mobileMenu) : null)
  return (
    <header>
      <div id="purpleBar"></div>
      <div className="container">
        {/* Actual Menu*/}
        <nav>
          <Link className="nav-logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>

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
                to="/"
              >
                About Us
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className={mobileMenu ? "nav-text_black" : "nav-text_white"}
                to="/"
              >
                How to Sous Vide
              </Link>
            </li>
          </ul>
        </nav>
        {/*Mobile Menu Utilities*/}
        <div
          tabIndex={0}
          role="button"
          id="hamburger"
          onKeyPress={e => handleKeyPress(e)}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          role="button"
          tabIndex={0}
          id="close-menu"
          className={mobileMenu ? "open" : ""}
          onKeyPress={e => handleKeyPress(e)}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
        </div>
        <a
          href="/#"
          role="button"
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
