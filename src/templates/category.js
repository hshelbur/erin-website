import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ArticlePreview from '../components/article-preview'

const CategoryTemplate = ({ data }) => (
  <Layout noSidebar>
    <ul className="article-page">
      {data.category.articles && data.category.articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          date={article.date}
          post={article.post.html.content}
          description={article.description}
          photo={article.photo.file.url}
          category={article.categories[0].name}
          slug={article.slug}
        />
      ))}
    </ul>
  </Layout>
)

export default CategoryTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    category: contentfulCategory(slug: { eq: $slug }) {
      articles: article {
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
`
