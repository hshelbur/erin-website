import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from './sidebar'
import Metadata from './metadata'
import Header from './header'
import SocialForm from './social-form'
import '../_styles/index.css'

const Layout = ({ children, noSidebar, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            keywords
            description
            siteUrl
          }
        }
        logo: contentfulImage(title: { eq: "Logo" }) {
          image {
            file {
              url
            }
          }
          title
        }
        profilePhoto: contentfulImage(title: { eq: "Sidebar Photo" }) {
          image {
            file {
              url
            }
          }
          title
        }
        popularPosts: contentfulList(name: { eq: "Popular Posts" }) {
          items {
            ... on ContentfulArticle {
              title
              slug
              mainImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Metadata
          name={data.site.siteMetadata.title}
          title={data.site.siteMetadata.title}
          keywords={data.site.siteMetadata.keywords.join(`, `)}
          description={data.site.siteMetadata.description}
          url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        />
        <Header logoUrl={data.logo.image.file.url} />
        <div className="row">
          {noSidebar ? (
            <main className="col-lg-12">{children}</main>
          ) : (
            <React.Fragment>
              <main className="col-md-8 col-lg-9">{children}</main>
              <aside className="col-md-4 col-lg-3 side-bar">
                <Sidebar
                  profilePhoto={data.profilePhoto.image.file.url}
                  popularPosts={data.popularPosts.items}
                />
              </aside>
            </React.Fragment>
          )}
        </div>
        <footer>
          <SocialForm />
          <p className="developed-by">
            Designed and Developed by{' '}
            <a
              href="https://www.linkedin.com/in/howard-shelburne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Howard Shelburne
            </a>
            , Web Developer
          </p>
        </footer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
