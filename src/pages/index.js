import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby Website</p>

    <h2 style={{ margin: 0 }}>Posts</h2>
    {data.allContentfulPost.nodes.map(post => {
      return <div key={post.id}>{post.title}</div>
    })}
  </Layout>
)

export const query = graphql`
  query ContentFulPosts {
    allContentfulPost {
      nodes {
        id
        title
        node_locale
      }
    }
  }
`

export default IndexPage
