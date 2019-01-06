import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const Archive = ({ data }) => (
  <Layout>
    <section className="article">
      <h4>
        <b>Coffee Meets Polished Archives</b>
      </h4>
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
    const { articles } = this.props
    const articlesByMonth2018 = [
      {
        month: 'DECEMBER',
        articles: [],
      },
      {
        month: 'NOVEMBER',
        articles: [],
      },
      {
        month: 'OCTOBER',
        articles: [],
      },
      {
        month: 'SEPTEMBER',
        articles: [],
      },
      {
        month: 'AUGUST',
        articles: [],
      },
      {
        month: 'JULY',
        articles: [],
      },
      {
        month: 'JUNE',
        articles: [],
      },
      {
        month: 'MAY',
        articles: [],
      },
      {
        month: 'APRIL',
        articles: [],
      },
      {
        month: 'MARCH',
        articles: [],
      },
      {
        month: 'FEBRUARY',
        articles: [],
      },
      {
        month: 'JANUARY',
        articles: [],
      },
    ]

    articles.map(article => {
      const date = article.data.date
      if (date.split(`-`)[0] === '2018') {
        switch (date.split(`-`)[1]) {
          case '01':
            return articlesByMonth2018[11].articles.push(article)
          case '02':
            return articlesByMonth2018[10].articles.push(article)
          case '03':
            return articlesByMonth2018[9].articles.push(article)
          case '04':
            return articlesByMonth2018[8].articles.push(article)
          case '05':
            return articlesByMonth2018[7].articles.push(article)
          case '06':
            return articlesByMonth2018[6].articles.push(article)
          case '07':
            return articlesByMonth2018[5].articles.push(article)
          case '08':
            return articlesByMonth2018[4].articles.push(article)
          case '09':
            return articlesByMonth2018[3].articles.push(article)
          case '10':
            return articlesByMonth2018[2].articles.push(article)
          case '11':
            return articlesByMonth2018[1].articles.push(article)
          case '12':
            return articlesByMonth2018[0].articles.push(article)
          default:
            return null
        }
      }
      return null
    })
    return (
      <React.Fragment>
        {articlesByMonth2018.map(({ month, articles }) => {
          return (
            <React.Fragment>
              {articles.length > 0 && (
                <p>
                  <b>{month} 2018</b>
                </p>
              )}
              {articles.map(article => (
                <p className="tabbed">
                  <a href={`/${article.data.slug}`}>{article.data.title}</a>
                </p>
              ))}
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}
