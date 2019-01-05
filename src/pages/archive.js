import React, { Component } from 'react'
import Layout from '../layout'

const Archive = ({ data }) => (
  <Layout>
    <section className="article">
      <h4><b>Coffee Meets Polished Archives</b></h4>
      <ArchiveList articles={data.allContentfulArticle.articles} />
    </section>
  </Layout>
)

export default Archive

export const pageQuery = graphql`
  {
    allContentfulArticle {
      articles: edges {
        data: node {
          id
          title
          date
          slug
        }
      }
    }
  }
`

class ArchiveList extends Component {
  render() {
    const {articles} = this.props
    const jan18 = [], feb18 = [], mar18 = [], apr18 = [], may18 = [], jun18 = [], jul18 = [], aug18 = [], sep18 = [],  oct18 = [], nov18 = [], dec18 = []

    articles.map(article => {
      const date = article.data.date
      if (date.split(`-`)[0] === '2018') {
        switch(date.split(`-`)[1]) {
          case '01':
            return jan18.push(article)
          case '02':
            feb18.push(article)
            return
          case '03':
            mar18.push(article)
            return
          case '04':
            apr18.push(article)
            return
          case '05':
            may18.push(article)
            return
          case '06':
            jun18.push(article)
            return
          case '07':
            jul18.push(article)
            return
          case '08':
            aug18.push(article)
            return
          case '09':
            sep18.push(article)
            return
          case '10':
            oct18.push(article)
            return
          case '11':
            nov18.push(article)
            return
          case '12':
            dec18.push(article)
            return
          default:
            return
        }
      }
    })
  return(
    <React.Fragment>
      {dec18.length > 0 && <p><b>DECEMBER 2018</b></p>}
      {dec18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {nov18.length > 0 && <p><b>NOVEMBER 2018</b></p>}
      {nov18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {oct18.length > 0 && <p><b>OCTOBER 2018</b></p>}
      {oct18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {sep18.length > 0 && <p><b>SEPTEMBER 2018</b></p>}
      {sep18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {aug18.length > 0 && <p><b>AUGUST 2018</b></p>}
      {aug18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {jul18.length > 0 && <p><b>JULY 2018</b></p>}
      {jul18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
      {jun18.length > 0 && <p><b>JUNE 2018</b></p>}
      {jun18.map(article =>
        <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
      )}
    </React.Fragment>
  )
  }
}