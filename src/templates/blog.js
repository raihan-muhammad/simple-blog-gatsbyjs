import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      title
      createdAt(fromNow: true)
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulCategory.title}</h1>
      <p>{props.data.contentfulCategory.createdAt}</p>
    </Layout>
  )
}

export default Blog
