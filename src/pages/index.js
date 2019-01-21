import React from 'react'
import ArticlePreview from '../components/article-preview'
import Layout from '../layout'
import { graphql } from 'gatsby'
import Pagination from '../components/pagination'
import {PAGINATION_LIMIT} from '../constants'
import {articlePagePath} from '../paths'

const IndexPage = ({ data, location }) => (
  <Layout location={location} >
    <ul className="article-page">
      {data.articles.edges.map(({ node: article }) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          date={article.date}
          post={article.post.html.content}
          description={article.description}
          photo={article.photo.file.url}
          categories={article.categories}
          slug={article.slug}
        />
      ))}
    </ul>
    <Pagination
      current={1}
      perPage={PAGINATION_LIMIT}
      totalCount={data.articles.totalCount}
      linkForPage={articlePagePath}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    articles: allContentfulArticle(limit: 5, sort: {fields: [date], order:DESC}) {
      totalCount
      edges {
        node {
          id
          title
          date
          post: body {
            html: childMarkdownRemark {
              content: html
            }
          }
          description: intro {
            html: childMarkdownRemark {
              content: html
            }
          }
          photo: mainImage {
            file {
              url
            }
          }
          categories {
            name
          }
          slug
        }
      }
    }
  }
`
