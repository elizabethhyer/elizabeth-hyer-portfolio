import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Oh no! Page Not Found!</h1>
      Head to the <Link to="/">Home Page</Link>
    </Layout>
  )
}

export default NotFound
