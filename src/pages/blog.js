import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            hero {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  let posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <main className="blog">
        <div className="blog__info">
          <h1 className="blog__info__title">Blog archive</h1>
        </div>
        <div className="blog__posts">
          {posts.map((edge, index) => {
            let post = edge.node
            return (
              <div className="blog__post">
                <Link to={`/blog/${post.slug}`} key={index}>
                  <h2 className="blog__title">{post.title}</h2>
                  <p className="blog__date">{post.date}</p>
                  <img
                    className="blog__img"
                    src={post.hero.file.url}
                    alt="post hero"
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default BlogPage
