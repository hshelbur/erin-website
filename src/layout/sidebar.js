import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import SocialForm from './social-form'
import MailchimpForm from './mailchimp-form'
import { DangerousHTML } from '../components/contentful/html'
import { articlePath } from '../paths'

const Sidebar = ({ profilePhoto, popularPosts }) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        profilePhoto: contentfulImage(title: { eq: "Sidebar Photo" }) {
          image {
            file {
              url
            }
          }
          title
        }
        description: contentfulMarkdown(name: {eq: "Side Bar Description"}) {
          body: markdown {
            html: childMarkdownRemark {
              content: html
            }
          }
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
      <div className="side-bar">
        <section className="about">
          <img className="profile-picture" src={data.profilePhoto.image.file.url} alt="Erin" />
          <DangerousHTML>{data.description.body.html.content}</DangerousHTML>
        </section>
        <SocialForm />
        <MailchimpForm />
        <PopularPosts popularPosts={data.popularPosts.items} />
      </div>
    )}
  />
)

export default Sidebar

//will move later

const PopularPosts = ({ popularPosts }) => (
  <div className="popular-posts">
    <h3>Popular Posts</h3>
    <nav>
      <ul>
        {popularPosts.map(article => (
          <li>
            <Link to={articlePath(article.slug)}>
              <img
                src={`${article.mainImage.file.url}`}
                alt={`${article.title}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)
