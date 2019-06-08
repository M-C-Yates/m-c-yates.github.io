import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  let posts = data.allMarkdownRemark.edges
  console.log(posts)
  return (
    <Layout>
      <main className="blog">
        <div className="blog__info">
          <h1 className="blog__info__title">Blog</h1>
          <p className="blog__info__text">Posts will be here later</p>
        </div>
        <ol>
          {posts.map((edge, index) => {
            console.log(edge.node)
            const post = edge.node.frontmatter
            return (
              <li key={index}>
                <h2>{post.title}</h2>
                <h3>{post.date}</h3>
              </li>
            )
          })}
        </ol>
      </main>
    </Layout>
  )
}

export default BlogPage
