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
        <ArticlePreview {...article} key={article.id} />
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
          ...ArticlePreviewFragment
        }
      }
    }
  }
`
