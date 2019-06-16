import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(fit: CONTAIN) {
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  `)
  const images = data.allImageSharp.edges
  let srcs = []
  images.forEach(edge => {
    srcs.push(edge.node)
  })
  console.log(srcs)
  return (
    <section className="projects">
      <article className="projects__card">
        <h3 className="projects__card__title">BnB</h3>
        <Img
          className="projects__card__img"
          fluid={srcs[0].fluid}
          alt="Bnb project Image"
        />
        <ul className="projects__card__stack">
          <li>React</li>
          <li>Graphql(Apollo Client, Graphql-Yoga)</li>
          <li>PostgreSQL + Prisma</li>
          <li>Node</li>
          <li>Typescript(backend only)</li>
        </ul>
        <p className="projects__card__description">
          A fullstack AirBnB clone implemented with React & Apollo-Client on the
          frontend, and a graphql server built with graphql-yoga on the backend
          with all data stored in a postgres container managed by Prisma.
        </p>
        <div className="projects__card__link">
          <a href="https://github.com/M-C-Yates/bnb-frontend">Frontend Code</a>
          <a href="https://github.com/M-C-Yates/bnb-backend">Backend Code</a>
        </div>
      </article>
      <article className="projects__card">Fullstack todoApp</article>
    </section>
  )
}

export default Projects
