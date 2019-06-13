import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout"
import Skills from "./skills"
import HomeHeader from "./header/HomeHeader"
import Projects from "./projects"

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
