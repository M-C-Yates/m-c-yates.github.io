import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <main className="home__box">
        <h1>Hello!</h1>
        <h2>I'm Matthew a fullstack developer in Lynchburg, Va</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage
