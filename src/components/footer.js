import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const author = data.site.siteMetadata.author
  return (
    <footer>
      <p>
        Created by {author}, &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
