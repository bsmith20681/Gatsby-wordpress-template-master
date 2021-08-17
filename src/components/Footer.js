import React from "react"

const Footer = () => {
  const fullYear = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="footer-text">thinksousvide.com © {fullYear}</p>
    </div>
  )
}

export default Footer
