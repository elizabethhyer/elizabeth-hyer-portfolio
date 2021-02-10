import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Oh no! Page Not Found!</h1>
      Head to the <Link to="/">Home Page</Link>
    </Layout>
  )
}

export default NotFound
