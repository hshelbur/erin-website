import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import {articlePath, categoryPagePath} from '../paths'

class ArticlePreview extends Component {
  render() {
    const { title, date, categories, description, photo, slug } = this.props
    const articleLink = articlePath(slug)
    const readMoreDescription = `${description.html.content} <a href="${articleLink}">[Read more]</a>`

    return (
      <article className="preview">
        <h2 className="article-title">
          <Link to={articleLink}>{title}</Link>
        </h2>
        <h3 className="article-timestamp">
          <time>{date}</time>
        </h3>
        <p className="category">
          {categories.map(category => (
            <Link to={categoryPagePath(category.slug, 1)}>{category.name} </Link>
          ))}
        </p>
        <div className="article-preview">
          <Link to={articleLink}><img src={photo} alt="Article Preview" /></Link>
          <div dangerouslySetInnerHTML={{ __html: readMoreDescription }} />
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
      slug
    }
    slug
  }
`
