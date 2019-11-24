import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <h1>
      <FormattedMessage id="hello" />
    </h1>
    <p>
      <FormattedMessage id="welcome" />
    </p>

    <h2 style={{ margin: 0 }}>Posts</h2>
    {data.allContentfulPost.nodes.map(post => {
      return (
        <div key={post.contentful_id}>
          <Link to={"/" + post.path}>{post.title}</Link>
        </div>
      )
    })}

    <br />
    <Link to="/page-2">
      <FormattedMessage id="go_page2" />
    </Link>
  </Layout>
)

export const query = graphql`
  query ContentFulPosts($locale: String) {
    allContentfulPost(filter: { node_locale: { eq: $locale } }) {
      nodes {
        contentful_id
        title
        path
      }
    }
  }
`

export default injectIntl(IndexPage)
