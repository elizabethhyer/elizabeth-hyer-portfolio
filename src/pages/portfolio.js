import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"
import portfolioStyles from "./portfolio.module.scss"
import crwn from "../imgs/crwn-clothing.png"
import forkify from "../imgs/forkify.png"
import natours from "../imgs/natours.png"
import trillo from "../imgs/trillo.png"
import slackClone from "../imgs/slack-clone.png"

const PortfolioPage = () => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <div className={portfolioStyles.container}>
        <a href="https://forkify-elizabeth.netlify.app" target="__blank">
          <img
            src={forkify}
            alt="Recipe application"
            className={portfolioStyles.img}
          />
        </a>
        <a href="https://elizabeth-crwn-live.herokuapp.com/" target="__blank">
          <img
            src={crwn}
            alt="Sample e-commerce website"
            className={portfolioStyles.img}
          />
        </a>
        <a href="https://natours-elizabeth.netlify.app" target="__blank">
          <img
            src={natours}
            alt="Sample travel tour website built with HTML and CSS"
            className={portfolioStyles.img}
          />
        </a>
        <a href="https://trillo-elizabeth.netlify.app" target="__blank">
          <img
            src={trillo}
            alt="Sample hotel booking website built with HTML and CSS"
            className={portfolioStyles.img}
          />
        </a>
        <a href="https://slack-clone-32491.web.app/" target="__blank">
          <img
            src={slackClone}
            alt="Simplified Slack clone"
            className={portfolioStyles.img}
          />
        </a>
      </div>
    </Layout>
  )
}

export default PortfolioPage
