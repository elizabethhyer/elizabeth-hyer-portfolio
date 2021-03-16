import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import { useStaticQuery, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = function () {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.container}>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.blogPost}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
