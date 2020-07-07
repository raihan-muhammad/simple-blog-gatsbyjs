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
  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author}, Copyright © 2020. Made with
        Gatsby js
      </p>
    </footer>
  )
}

export default Footer
