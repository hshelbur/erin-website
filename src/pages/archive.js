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
    const articlesByMonth2018 = [
      {
        month: 'DECEMBER',
        articles: dec18,
      },
      {
        month: 'NOVEMBER',
        articles: nov18,
      },
      {
        month: 'OCTOBER',
        articles: oct18,
      },
      {
        month: 'SEPTEMBER',
        articles: sep18,
      },
      {
        month: 'AUGUST',
        articles: aug18,
      },
      {
        month: 'JULY',
        articles: jul18,
      },
      {
        month: 'JUNE',
        articles: jun18,
      },
      {
        month: 'MAY',
        articles: may18,
      },
      {
        month: 'APRIL',
        articles: apr18,
      },
      {
        month: 'MARCH',
        articles: mar18,
      },
      {
        month: 'FEBRUARY',
        articles: feb18,
      },
      {
        month: 'JANUARY',
        articles: jan18,
      },
    ]

    articles.map(article => {
      const date = article.data.date
      if (date.split(`-`)[0] === '2018') {
        switch(date.split(`-`)[1]) {
          case '01':
            return jan18.push(article)
          case '02':
            return feb18.push(article)
          case '03':
            return mar18.push(article)
          case '04':
            return apr18.push(article)
          case '05':
            return may18.push(article)
          case '06':
            return jun18.push(article)
          case '07':
            return jul18.push(article)
          case '08':
            return aug18.push(article)
          case '09':
            return sep18.push(article)
          case '10':
            return oct18.push(article)
          case '11':
            return nov18.push(article)
          case '12':
            return dec18.push(article)
          default:
            return null
        }
      }
      return null
    })
  return(
    <React.Fragment>
      {articlesByMonth2018.map(({month, articles}) => {
        return(
          <React.Fragment>
            {articles.length > 0 && <p><b>{month} 2018</b></p>}
            {articles.map(article =>
              <p className="tabbed"><a href={`/${article.data.slug}`}>{article.data.title}</a></p>
            )}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
  }
}