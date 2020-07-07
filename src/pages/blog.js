import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategory(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            slug
            createdAt(fromNow: true)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>My Blog</h1>
      <p>Posts will show up here letter on.</p>
      <ol>
        {data.allContentfulCategory.edges.map(item => {
          return (
            <li>
              <Link to={item.node.slug}>
                <h2>{item.node.title}</h2>
                <p>{item.node.createdAt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
