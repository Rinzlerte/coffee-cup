import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Smart Cup</h1>
    <FaGulp />  
</Layout>
)

export default IndexPage
