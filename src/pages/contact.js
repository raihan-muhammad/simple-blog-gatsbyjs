import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>Wa : 01219829182</p>
      <p>
        Web : <Link to="https://sosmed-app.herokuapp.com">Sosmed App</Link>{" "}
      </p>
    </Layout>
  )
}

export default ContactPage
