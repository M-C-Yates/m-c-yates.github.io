import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <main className="home">
        <div className="home__info">
          <h1 className="home__info__title">Hello!</h1>
          <h2 className="home__info__subtitle">
            I'm Matthew a fullstack developer in Lynchburg, Va
          </h2>
          <p className="home__info__text">
            Need a developer? <Link to="/contact">Contact me.</Link>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
