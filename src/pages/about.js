import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const AboutMe = ({ data, location }) => (
  <Layout location={location}>
    <article className="about-me">
      <div
        dangerouslySetInnerHTML={{ __html: data.aboutMe.markdown.post.html }}
      />
    </article>
  </Layout>
)

export default AboutMe

export const pageQuery = graphql`
  {
    aboutMe: contentfulMarkdown(name: { eq: "About Me" }) {
      markdown {
        post: childMarkdownRemark {
          html
        }
      }
    }
  }
`
