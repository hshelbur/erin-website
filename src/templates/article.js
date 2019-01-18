import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Metadata from '../layout/metadata'
import ArticleDisplay from '../components/article-display'

const ArticleTemplate = ({ data, location }) => (
  <Layout location={location} noSidebar>
    <Metadata
      title={data.article.metadata.title}
      description={data.article.metadata.description}
      keywords={data.article.metadata.keywords.join(', ')}
      image={data.article.metadata.image.file.url} 
    />
    <ArticleDisplay
      key={data.article.id}
      title={data.article.title}
      date={data.article.date}
      post={data.article.post}
      categories={data.article.categories}
      relatedArticles={data.article.relatedArticles}
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
      relatedArticles {
        title
        slug
        mainImage {
          file {
            url
          }
        }
      }
      categories {
        name
      }
      slug
      metadata {
          title
          description
          image {
            file {
              url
            }
          }
          keywords
          
        }
    }
  }
`
