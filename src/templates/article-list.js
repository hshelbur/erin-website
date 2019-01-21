import React from 'react'
import ArticlePreview from '../components/article-preview'
import Layout from '../layout'
import { graphql } from 'gatsby'
import Pagination from '../components/pagination'
import { PAGINATION_LIMIT } from '../constants'
import { articlePagePath } from '../paths'

const ArticleListTemplate = ({ data, location }) => {
  const pageNum = Number(location.pathname.split(`/`).slice(-1)[0])
  const currentPage = Number.isNaN(pageNum) ? 1 : pageNum

  return (
    <Layout location={location}>
      <ul className="article-page">
        {data.articles.edges.map(({ node: article }) => (
          <ArticlePreview {...article} key={article.id} />
        ))}
      </ul>
      <Pagination
        current={currentPage}
        perPage={PAGINATION_LIMIT}
        totalCount={data.articles.totalCount}
        linkForPage={articlePagePath}
      />
    </Layout>
  )
}

export default ArticleListTemplate

export const query = graphql`
  query ArticleListQuery($skip: Int!, $limit: Int!) {
    articles: allContentfulArticle(
      limit: $limit
      skip: $skip
      sort: { fields: [date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          ...ArticlePreviewFragment
        }
      }
    }
  }
`
