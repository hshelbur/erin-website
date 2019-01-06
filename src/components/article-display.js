import React, { Component } from 'react'

class ArticleDisplay extends Component {
  render() {
    const { title, date, post, categories } = this.props

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
