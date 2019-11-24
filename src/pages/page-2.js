import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const SecondPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title_page2" })} />
    <h1>
      <FormattedMessage id="hello_page2" />
    </h1>
    <p>
      <FormattedMessage id="welcome_page2" />
    </p>
    <Link to="/">
      <FormattedMessage id="go_back" />
    </Link>
  </Layout>
)

export default injectIntl(SecondPage)
