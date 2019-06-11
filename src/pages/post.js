import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const Post = props => {
  // const post = props.data.markdownRemark

  return (
    <Layout>
      <article className="post">
        <h2 className="post__title">Blog</h2>
        <h4 className="post__date">a date</h4>
        <div className="post__body">blogs here</div>
      </article>
    </Layout>
  )
}

export default Post

// {post.frontmatter.date}
// {post.frontmatter.title}
// dangerouslySetInnerHTML={{ __html: post.html }}
