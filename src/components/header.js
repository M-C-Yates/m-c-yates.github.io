import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <header className="header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matthew Yates portfolio</title>
      </Helmet>
      <nav role="navigation" className="header__nav">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/about">
          About
        </Link>
        <Link className="header__link" to="/blog">
          Blog
        </Link>
        <Link className="header__link" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
