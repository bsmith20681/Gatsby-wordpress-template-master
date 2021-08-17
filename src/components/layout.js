import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <div className="header-background">
            <Header />{" "}
            <div style={{ textAlign: "center", padding: "10vw 0" }}>
              <h1>sign up for our newsletter</h1>
              <input type="text" />
              <button>submit</button>
            </div>
          </div>
        ) : (
          <div className="header-background">
            <Header />{" "}
          </div>
        )}
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
