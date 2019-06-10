import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  let posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <main className="blog">
        <div className="blog__info">
          <h1 className="blog__info__title">Blog</h1>
          <p className="blog__info__text">Posts will be here later</p>
        </div>
        <div>
          {posts.map((edge, index) => {
            const post = edge.node.frontmatter
            return (
              <Link to={`/blog/${edge.node.fields.slug}`} key={index}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </Link>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default BlogPage
