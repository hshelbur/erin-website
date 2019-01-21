import React, { Component } from 'react'
import { graphql } from 'gatsby'

class ArticlePreview extends Component {
  render() {
    const { title, date, categories, description, photo, slug } = this.props

    return (
      <article className="preview">
        <h2 className="article-title">
          <a href={`/${slug}`}>{title}</a>
        </h2>
        <h3 className="article-timestamp">
          <time>{date}</time>
        </h3>
        <p className="category">
          {categories.map(category => (
            <a href={`/${category.name.toLowerCase()}`}>{category.name} </a>
          ))}
        </p>
        <div className="article-preview">
          <a href={`/${slug}`}><img src={photo} alt="Article Preview" /></a>
          <div dangerouslySetInnerHTML={{ __html: description.html.content }} />
          <div className="button"><a href={`/${slug}`}>Read more</a></div>
        </div>
      </article>
    )
  }
}

export default ArticlePreview

export const articlePreviewFragment = graphql`
  fragment ArticlePreviewFragment on ContentfulArticle {
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
`
