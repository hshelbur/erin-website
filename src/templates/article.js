import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ArticleDisplay from '../components/article-display'

const CategoryTemplate = ({ data }) => (
  <Layout noSidebar>
    <ArticleDisplay
      key={data.article.id}
      title={data.article.title}
      date={data.article.date}
      post={data.article.post}
      category={data.article.categories}
      slug={data.article.slug}
    />
  </Layout>
)

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      id
      date
      post: body {
        childMarkdownRemark {
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