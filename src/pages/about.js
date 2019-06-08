import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <main className="about">
        <h1 className="about__title">About me</h1>
        <p className="about__text">
          I'm a full-stack developer living in Lynchburg, va.
        </p>
      </main>
    </Layout>
  )
}

export default AboutPage
