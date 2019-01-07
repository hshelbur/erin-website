import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const AboutMe = ({ data }) => (
  <Layout>
    <article className="about-me">
      <div
        dangerouslySetInnerHTML={{ __html: data.aboutMe.markdown.post.html }}
      />
      <p>
        <a className="email" href="mailto:coffeemeetspolished@gmail.com">
          coffeemeetspolished@gmail.com
        </a>
      </p>
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
