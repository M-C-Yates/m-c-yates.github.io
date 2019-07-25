import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Skills from "./index/skills"
import HomeHeader from "./index/header/HomeHeader"
import Projects from "./index/projects"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Helmet />
        <main className="home">
          <HomeHeader />
          <Skills />
          <Projects />
        </main>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
