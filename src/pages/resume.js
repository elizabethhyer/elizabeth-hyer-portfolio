import React from "react"
import Layout from "../components/layout/layout"
import cv from "../imgs/cv.png"
import resumeStyles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <Layout>
      <div className={resumeStyles.container}>
        <a
          href="https://drive.google.com/file/d/1BiwLBDMvekw-LLXEvSZrLix4C7Pk5s3P/view"
          target="__blank"
        >
          <img
            src={cv}
            alt="Image of Elizabeth Hyer's CV"
            className={resumeStyles.image}
          />
        </a>
      </div>
    </Layout>
  )
}

export default ResumePage
