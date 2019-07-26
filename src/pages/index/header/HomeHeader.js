import React from "react"
import Info from "./Info"
import Hero from "./hero"

export const HomeHeader = () => (
  <section className="home__header">
    <Hero />
    <Info />
  </section>
)

export default HomeHeader
