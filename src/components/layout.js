import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import EmailSignUp from "./EmailSignUp"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <div className="header-background">
            <Header />
            <div className="header-title">
              <h1>Sous Vide tricks and tips sent to your inbox</h1>
              <EmailSignUp />
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
