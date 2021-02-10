import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FooterStyles from "./footer.module.scss"

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
    <footer className={FooterStyles.footer}>
      <p>
        Created with 💔 by {data.site.siteMetadata.author} in Atlanta, GA. ©2021
      </p>
    </footer>
  )
}

export default Footer
