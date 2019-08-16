import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner'
import pic11 from '../assets/images/pic11.jpg'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Helmet>
            <title>Hospitality Tribe</title>
            <meta name="description" content="" />
        </Helmet>

        <PageBanner title={frontmatter.title} image={pic11}/>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div 
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </section>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`