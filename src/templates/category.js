import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ArticlePreview from '../components/article-preview'
import Pagination from '../components/pagination'
import {PAGINATION_LIMIT} from '../constants'
import {categoryPagePath} from '../paths'

const CategoryTemplate = ({ data, location }) => {
  const pageNum = Number(location.pathname.split(`/`).slice(-1)[0])
  const currentPage = Number.isNaN(pageNum) ? 1 : pageNum
  const currentIndex = (currentPage - 1) * PAGINATION_LIMIT

  return  <Layout location={location} noSidebar>
    <ul className="article-page">
      {data.category.articles &&
        data.category.articles
          .sort((a, b) => b.sortableDate - a.sortableDate)
          .slice(currentIndex, currentIndex + PAGINATION_LIMIT)
          .map(article => (
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
      current={currentPage}
      perPage={PAGINATION_LIMIT}
      totalCount={data.category.articles.length}
      linkForPage={(page) => categoryPagePath(data.category.slug, page)}
    />
  </Layout>
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      slug
      articles: article {
        id
        title
        date
        sortableDate: date(formatString: "YYYMMDD")
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
`
