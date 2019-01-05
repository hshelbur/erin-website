import React, { Component } from 'react'

class ArticlePreview extends Component {
  render() {
    const { title, date, categories, description, photo, slug } = this.props

    return (
      <article className="preview">
        <h2 className="article-title"><a href={`/${slug}`}>{title}</a></h2>
        <h3 className="article-timestamp">
          <time>{date}</time>
        </h3>
        <p className="category">
          {categories.map(category => 
            <a href={`/${category.name.toLowerCase()}`}>{category.name} </a>
          )}
        </p>
        <div className="article-preview">
          <img src={photo} alt="Article Preview" />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </article>
    )
  }
}

export default ArticlePreview
