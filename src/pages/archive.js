import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import { MONTHS } from '../constants'
import { articlePath } from '../paths'

const Archive = ({ data, location }) => {
  const monthlyArticles = data.articles.edges.reduce(
    (months, { node: article }) => {
      const [year, month] = article.date.split(`-`).map(Number)
      const label = `${MONTHS[month - 1]} ${year}`
      const totalMonths = year * 12 + month
      const currMonthArticles = months[totalMonths]
        ? months[totalMonths].articles
        : []

      return {
        ...months,
        [totalMonths]: { label, articles: [...currMonthArticles, article] },
      }
    },
    {}
  )

  return (
    <Layout location={location}>
      <section className="article">
        <h4>
          <b>Coffee Meets Polished Archives</b>
        </h4>
        {Object.entries(monthlyArticles)
          .sort(([i], [j]) => j - i)
          .map(([_, month]) => (
            <React.Fragment>
              <p>
                <b>{month.label}</b>
              </p>
              {month.articles.map(article => (
                <p className="tabbed">
                  <Link to={articlePath(article.slug)}>{article.title}</Link>
                </p>
              ))}
            </React.Fragment>
          ))}
      </section>
    </Layout>
  )
}

export default Archive

export const pageQuery = graphql`
  {
    articles: allContentfulArticle(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          date
          slug
        }
      }
    }
  }
`
