import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ArticleDisplay from '../components/article-display'

const ArticleTemplate = ({ data }) => (
  <Layout noSidebar>
    <ArticleDisplay
      key={data.article.id}
      title={data.article.title}
      date={data.article.date}
      post={data.article.post}
      categories={data.article.categories}
      slug={data.article.slug}
    />
  </Layout>
)

export default ArticleTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      id
      date
      post: body {
        markdown: childMarkdownRemark {
          html
        }
      }
      categories {
        name
      }
      slug
    }
  }
`