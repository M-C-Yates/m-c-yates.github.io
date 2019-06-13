import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
