import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import Metadata from '../layout/metadata'
import { articlePath, categoryPagePath } from '../paths'

const ArticleTemplate = ({ data, location }) => {
  const { title, date, post, categories, relatedArticles, metadata } = data.article
  
  return <Layout location={location} noSidebar>
    <Metadata
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords.join(', ')}
      image={metadata.image.file.url} 
    />
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <h3 className="article-timestamp">
        <time>{date}</time>
      </h3>
      <p className="category">
        {categories.map(category => (
          <Link to={categoryPagePath(category.slug, 1)}>
            {category.name}
          </Link>
        ))}
      </p>
      <div className="article-copy">
        <div dangerouslySetInnerHTML={{ __html: post.markdown.html }} />
        <h4>❖❖❖</h4>
          <br></br>
        <h4>Like what you read?  Never miss an article and ☞ <a href="http://coffeemeetspolished.us16.list-manage.com/subscribe/post?u=1242ec8cf431dc6b8e8ddb9dc&id=256c307a06" target="_blank" rel="noopener noreferrer">SUBSCRIBE</a>!</h4>
          <br></br>
        <h4>Follow me on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/erin.turingan/">Instagram</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/erinturingan">Twitter</a> too!</h4>
          <br></br>
        <h4>❖❖❖</h4>
        <br></br>
        {relatedArticles && <h4>YOU MIGHT ALSO LIKE:</h4>}
        {relatedArticles && relatedArticles.map(article => (
          <Link className="three-up" to={articlePath(article.slug)}>
            <img src={article.mainImage.file.url} alt="New Podcast Discoveries: Female Hosts" />
            <p className="centered">{article.title}</p>
          </Link>
        ))}
      </div>
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
}

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
