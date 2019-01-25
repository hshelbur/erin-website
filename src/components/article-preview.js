import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from './contentful/image'
import { DangerousHTML } from './contentful/html'
import { articlePath, categoryPagePath } from '../paths'

const ArticlePreview = ({
  title,
  date,
  categories,
  description,
  photo,
  slug,
}) => {
  const articleLink = articlePath(slug)
  const readMoreDescription = `${
    description.html.content
  } <a href="${articleLink}">[Read more]</a>`

  return (
    <article className="preview">
      <h2 className="article-title">
        <Link to={articleLink}>{title}</Link>
      </h2>
      <p className="category">
        {categories.map((category, index) => (
          <Link to={categoryPagePath(category.slug, 1)}>{category.name}{index === categories.length - 1 ? null : `, `}</Link>
        ))}
      </p>
      <div className="article-preview">
        <Link to={articleLink}>
          <Image {...photo} />
        </Link>
        <DangerousHTML>{readMoreDescription}</DangerousHTML>
      </div>
    </article>
  )
}

export default ArticlePreview

export const articlePreviewFragment = graphql`
  fragment ArticlePreviewFragment on ContentfulArticle {
    id
    title
    date(formatString: "MMMM DD, YYYY")
    description: intro {
      html: childMarkdownRemark {
        content: html
      }
    }
    photo: mainImage {
      ...ContentfulImageFragment
    }
    categories {
      name
      slug
    }
    slug
  }
`
