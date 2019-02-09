import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import Metadata from '../layout/metadata'
import Image from '../components/contentful/image'
import { DangerousHTML } from '../components/contentful/html'
import { articlePath, categoryPagePath } from '../paths'

const ArticleTemplate = ({ data, location }) => {
  const {
    title,
    date,
    post,
    categories,
    relatedArticles,
    metadata,
  } = data.article

  return (
    <Layout location={location} noSidebar>
      <Metadata
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords.join(', ')}
        image={metadata.image.file.url}
      />
      <article className="article">
        <h3 className="article-timestamp">
          <time>{date}</time>
        </h3>
        <h2 className="article-title">{title}</h2>
        <p className="category">
          {categories.map((category, index) => (
            <Link to={categoryPagePath(category.slug, 1)}>{category.name}{index === categories.length - 1 ? null : `, `}</Link>
          ))}
        </p>

        <div className="article-copy">
          <DangerousHTML>{post.html.content}</DangerousHTML>
          <div className="center">❖❖❖</div>
          <h4>
            Like what you read? Never miss an article and ☞{' '}
            <a
              href="http://coffeemeetspolished.us16.list-manage.com/subscribe/post?u=1242ec8cf431dc6b8e8ddb9dc&id=256c307a06"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUBSCRIBE
            </a>
            !
          </h4>
          <h4>
            Follow me on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/erinturingan/"
            >
              Instagram
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/erinturingan"
            >
              Twitter
            </a>{' '}
            too!
          </h4>
          <div className="center">❖❖❖</div>
        </div>
        {relatedArticles && <h4>YOU MIGHT ALSO LIKE:</h4>}
        {relatedArticles &&
          relatedArticles.map(article => (
            <Link className="three-up" to={articlePath(article.slug)}>
              <Image {...article.mainImage} />
              <p className="centered">{article.title}</p>
            </Link>
          ))}
        <div className="article-footer">
          <p>
            A post about{' '}
            <Link to={categoryPagePath(categories[0].slug, 1)}>
              {categories[0].name}
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      id
      date(formatString: "MMMM DD, YYYY")
      post: body {
        html: childMarkdownRemark {
          content: html
        }
      }
      relatedArticles {
        title
        slug
        mainImage {
          ...ContentfulImageFragment
        }
      }
      categories {
        name
        slug
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
