import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"
import portfolioStyles from "./portfolio.module.scss"
import crwn from "../imgs/crwn-clothing.png"
import forkify from "../imgs/forkify.png"
import natours from "../imgs/natours.png"
import trillo from "../imgs/trillo.png"
import slackClone from "../imgs/slack-clone.png"
import nexter from "../imgs/nexter.png"

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
          <div className={portfolioStyles.description}>
            <h1>Forkify</h1>
            <p>JavaScript</p>
          </div>
        </a>

        <a href="https://elizabeth-crwn-live.herokuapp.com/" target="__blank">
          <img
            src={crwn}
            alt="Sample e-commerce website"
            className={portfolioStyles.img}
          />
          <div className={portfolioStyles.description}>
            <h1>Crwn Clothing</h1>
            <p>React.JS, Google Firebase</p>
          </div>
        </a>

        <a href="https://natours-elizabeth.netlify.app" target="__blank">
          <img
            src={natours}
            alt="Sample travel tour website built with HTML and CSS"
            className={portfolioStyles.img}
          />
          <div className={portfolioStyles.description}>
            <h1>Natours</h1>
            <p>HTML, CSS</p>
          </div>
        </a>

        <a href="https://trillo-elizabeth.netlify.app" target="__blank">
          <img
            src={trillo}
            alt="Sample hotel booking website built with HTML and CSS"
            className={portfolioStyles.img}
          />
          <div className={portfolioStyles.description}>
            <h1>Trillo</h1>
            <p>HTML, CSS</p>
          </div>
        </a>

        <a href="https://nexter-elizabeth.netlify.app/" target="__blank">
          <img
            src={nexter}
            alt="Sample realty website built with HTML and CSS"
            className={portfolioStyles.img}
          />
          <div className={portfolioStyles.description}>
            <h1>Nexter</h1>
            <p>HTML, CSS</p>
          </div>
        </a>

        <a href="https://slack-clone-32491.web.app/" target="__blank">
          <img
            src={slackClone}
            alt="Simplified Slack clone"
            className={portfolioStyles.img}
          />
          <div className={portfolioStyles.description}>
            <h1>Slack Clone</h1>
            <p>React.JS, Styled Components</p>
          </div>
        </a>
      </div>
    </Layout>
  )
}

export default PortfolioPage

// <Layout>
// <Head title="Portfolio" />
// <div className={portfolioStyles.container}>
//   <div className={portfolioStyles.linkContainer}>
//     <a href="https://forkify-elizabeth.netlify.app" target="__blank">
//       <img
//         src={forkify}
//         alt="Recipe application"
//         className={portfolioStyles.img}
//       />
//       <div className={portfolioStyles.description}>
//         <h1>Forkify</h1>
//         <p>JavaScript</p>
//       </div>
//     </a>
//   </div>
//   <div className={portfolioStyles.linkContainer}>
//     <a href="https://elizabeth-crwn-live.herokuapp.com/" target="__blank">
//       <img
//         src={crwn}
//         alt="Sample e-commerce website"
//         className={portfolioStyles.img}
//       />
//       <div className={portfolioStyles.description}>
//         <h1>Crwn Clothing</h1>
//         <p>React.JS, Google Firebase</p>
//       </div>
//     </a>
//   </div>
//   <div className={portfolioStyles.linkContainer}>
//     <a href="https://natours-elizabeth.netlify.app" target="__blank">
//       <img
//         src={natours}
//         alt="Sample travel tour website built with HTML and CSS"
//         className={portfolioStyles.img}
//       />
//       <div className={portfolioStyles.description}>
//         <h1>Natours</h1>
//         <p>HTML, CSS</p>
//       </div>
//     </a>
//   </div>
//   <div className={portfolioStyles.linkContainer}>
//     <a href="https://trillo-elizabeth.netlify.app" target="__blank">
//       <img
//         src={trillo}
//         alt="Sample hotel booking website built with HTML and CSS"
//         className={portfolioStyles.img}
//       />
//       <div className={portfolioStyles.description}>
//         <h1>Trillo</h1>
//         <p>HTML, CSS</p>
//       </div>
//     </a>
//   </div>
//   <div className={portfolioStyles.linkContainer}>
//     <a href="https://slack-clone-32491.web.app/" target="__blank">
//       <img
//         src={slackClone}
//         alt="Simplified Slack clone"
//         className={portfolioStyles.img}
//       />
//       <div className={portfolioStyles.description}>
//         <h1>Slack Clone</h1>
//         <p>React.JS, Styled Components</p>
//       </div>
//     </a>
//   </div>
// </div>
// </Layout>
