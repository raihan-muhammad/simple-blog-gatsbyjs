import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>My name kepo haha</p>
      <p>
        Contact <Link to="/contact">Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
