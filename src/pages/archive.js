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
    allContentfulArticle(sort: {fields: [date], order: DESC}) {
      articles: edges {
        data: node {
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
    const months = [{month: '12'},{month: '11'},{month: '10'},{month: '09'},{month: '08'},{month: '07'},{month: '06'},{month: '05'},{month: '04'},{month: '03'},{month: '02'},{month: '01'}]
    const articles2017 = months.map(month => {return {...month, year: 2017, articles: []}})
    const articles2018 = months.map(month => {return {...month, year: 2018, articles: []}})
    const articles2019 = months.map(month => {return {...month, year: 2019, articles: []}})
    const articlesByMonth = [...articles2019,...articles2018, ...articles2017]

    articlesByMonth.map(month => {
      articles.map(article => {
        const date = article.data.date
        if (date.split(`-`)[0] === `${month.year}` && date.split(`-`)[1] === `${month.month}`) {
          month.articles.push(article)
          return null
        }
        return null
      })
      return null
    })

    return (
      <React.Fragment>
        {articlesByMonth.map(({ month, articles, year }) => {
          return (
            <React.Fragment>
              {articles.length > 0 && (
                <p>
                  <b>{`${getMonth(month)} ${year}`}</b>
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

    function getMonth(month) {
      switch(month) {
        case('01'):
          return 'JANUARY'
        case('02'):
          return 'FEBRUARY'
        case('03'):
          return 'MARCH'
        case('04'):
          return 'APRIL'
        case('05'):
          return 'MAY'
        case('06'):
          return 'JUNE'
        case('07'):
          return 'JULY'
        case('08'):
          return 'AUGUST'
        case('09'):
          return 'SEPTEMBER'
        case('10'):
          return 'OCTOBER'
        case('11'):
          return 'NOVEMBER'
        case('12'):
          return 'DECEMBER'
        default:
          return 'Poop'
      }
    }
  }
}
