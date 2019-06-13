import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import favicon16 from "../../static/favicon-16x16.png"
import favicon32 from "../../static/favicon-32x32.png"
import favicon64 from "../../static/favicon.ico"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  return (
    <header className="header">
      <Helmet
        title={title}
        meta={[{ name: "charSet", content: "utf-8" }]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon16}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon32}`,
          },
          { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
        ]}
      />
      <nav role="navigation" className="header__nav">
        <Link
          className="header__link"
          activeClassName="header__link__active"
          to="/index/Index"
        >
          Home
        </Link>
        <Link
          className="header__link"
          activeClassName="header__link__active"
          to="/Blog"
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
