import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ pageContext, data }) => (
  <Layout>
    <h1>{data.contentfulPost.title}</h1>
  </Layout>
)

export const query = graphql`
  query ContentFulPost($slug: String, $locale: String) {
    contentfulPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
      path
      node_locale
      title
    }
  }
`

export default BlogPost
