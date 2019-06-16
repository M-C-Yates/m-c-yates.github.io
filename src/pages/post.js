import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      hero {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

export const Post = props => {
  let post = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return (
          <figure>
            <img className="post__body_img" alt={alt} src={url} />
            <figcaption>{alt}</figcaption>
          </figure>
        )
      },
    },
  }
  return (
    <Layout>
      <article className="post">
        <h2 className="post__title">{post.title}</h2>
        <h4 className="post__date">{post.date}</h4>
        <img className="post__hero" src={post.hero.file.url} alt="post hero" />
        <div className="post__body">
          {documentToReactComponents(post.body.json, options)}
        </div>
      </article>
    </Layout>
  )
}

export default Post
