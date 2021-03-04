import React from "react"
import AboutPage from "./about"
import BlogPage from "./blog"
import ContactPage from "./contact"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello there!</h1>
      <p>Hello there! I'm Elizabeth, and I'm so glad you're here!</p>
      <AboutPage />
      <BlogPage />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
