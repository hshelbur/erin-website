import React, { Component } from 'react'
import {graphql} from 'gatsby'

class ArticleDisplay extends Component {
  render() {
    const article = {
      title: 'Poopity Scoop',
      date: '1-4-2019',
      post: '<p>a post<p>',
      category: 'wellness',
    }
    const {title, date, post, category} = article

    return(
        <article className="article">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-timestamp"><time>{date}</time></h3>
          <p className="category"><a href={`/${category.toLowerCase()}`}>{category}</a></p>
          <div className="article-copy">
            <div dangerouslySetInnerHTML={{ __html: post }} />
          </div>
          <div className="article-footer">
            <p>A post about <a href={`/${category.toLowerCase()}`}>{category}</a></p>
          </div>
        </article>
    );
  }
}

export default ArticleDisplay