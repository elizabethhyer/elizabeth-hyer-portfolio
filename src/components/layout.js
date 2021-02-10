import React from "react"
import Header from "./header"
import Footer from "./footer/footer"
import "../styles/index.scss"
// import layoutStyles from "./layout.module.scss"

const Layout = function (props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
