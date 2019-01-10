import React, { Component } from 'react'

class ArticleDisplay extends Component {
  render() {
    const { title, date, post, categories, relatedArticles } = this.props

    return (
      <article className="article">
        <h2 className="article-title">{title}</h2>
        <h3 className="article-timestamp">
          <time>{date}</time>
        </h3>
        <p className="category">
          {categories.map(category => (
            <a href={`/${category.name.toLowerCase()}`}>{category.name} </a>
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
            <a className="three-up" href={article.slug}>
              <img src={article.mainImage.file.url} alt="New Podcast Discoveries: Female Hosts" />
            </a>
          ))}
        </div>
        <div className="article-footer">
          <p>
            A post about{' '}
            <a href={`/${categories[0].name.toLowerCase()}`}>
              {categories[0].name}
            </a>
          </p>
        </div>
      </article>
    )
  }
}

export default ArticleDisplay
