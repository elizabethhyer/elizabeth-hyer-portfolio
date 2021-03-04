import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = function (props) {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Header />
      <div className={layoutStyles.contentContainer}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
