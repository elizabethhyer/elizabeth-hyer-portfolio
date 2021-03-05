import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <Link to="/portfolio" className={indexStyles.portfolio}>
          See Projects
        </Link>
        <Link to="/contact" className={indexStyles.contact}>
          Contact Elizabeth
        </Link>
        <Link to="/blog" className={indexStyles.blog}>
          Blog Posts
        </Link>
        <Link to="/about" className={indexStyles.about}>
          Find out more
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
