import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export const Post = props => {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <article className="post">
        <h2 className="post__title">{post.frontmatter.title}</h2>
        <h4 className="post__date">{post.frontmatter.date}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="post__body"
        />
      </article>
    </Layout>
  )
}

export default Post
