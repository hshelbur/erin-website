import React, { Component } from 'react'
import SocialForm from './social-form'

const Sidebar = ({ profilePhoto, popularPosts }) => (
  <div className="side-bar">
    <section className="about">
      <img className="profile-picture" src={profilePhoto} alt="Erin" />
      <p>
        Coffee Meets Polished is an empowerment forum to celebrate who we are,
        from our first coffee of the day to our more polished selves. My name is
        Erin, and I'm a NYC Content Creator, introvert, pharmacist, and
        self-proclaimed feminist. I hope you stick around and join the CMP
        community!
      </p>
    </section>
    <SocialForm />
    <MailchimpForm />
    <PopularPosts popularPosts={popularPosts} />
    <InstagramPhotos />
  </div>
)

export default Sidebar

//will move later

class InstagramPhotos extends Component {
  render() {
    return (
      <div className="instagram-photos">
        <section>
          <h1>
            <a
              href="https://www.instagram.com/erin.turingan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow CMP on Instagram!
            </a>
          </h1>
          <ul />
        </section>
      </div>
    )
  }
}

class MailchimpForm extends Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="//coffeemeetspolished.us16.list-manage.com/subscribe/post?u=1242ec8cf431dc6b8e8ddb9dc&id=256c307a06"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Sign Up to Receive Updates!</h2>
            <div className="mc-field-group">
              <input
                type="email"
                placeholder="Email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <input
                type="text"
                placeholder="First Name"
                name="FNAME"
                className="first-name"
                id="mce-FNAME"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>{' '}
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_1242ec8cf431dc6b8e8ddb9dc_256c307a06"
                tabIndex={-1}
                defaultValue
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const PopularPosts = ({popularPosts}) => (
      <div className="popular-posts">
        <h3>Popular Posts</h3>
        <nav>
          <ul>
            {popularPosts.map(article => 
              <a href={`/${article.slug}`}>
                <img src={`${article.mainImage.file.url}`} alt={`${article.title}`} />
              </a>
            )}
          </ul>
        </nav>
      </div>
    )
