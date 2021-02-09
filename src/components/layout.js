import React from "react"
import Header from "./header"
import Footer from "./footer"
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
