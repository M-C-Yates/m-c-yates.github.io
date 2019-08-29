import React from "react"
import pattern from "./pattern.png"

export const Hero = () => {
  return (
    <div
      className="home__header__hero"
      style={{
        backgroundImage: "url(" + pattern + ")",
      }}
    />
  )
}
export default Hero
