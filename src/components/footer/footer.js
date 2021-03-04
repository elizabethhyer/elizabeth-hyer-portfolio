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
    <p className={FooterStyles.container}>
      Created with 💔 by {data.site.siteMetadata.author} in Atlanta, GA. ©2021
    </p>
  )
}

export default Footer
