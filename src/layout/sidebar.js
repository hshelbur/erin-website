import React, { Component } from 'react'

const Sidebar = ({ photoUrl }) => (
  <div className="side-bar">
    <section className="about">
      <img className="profile-picture" src={photoUrl} alt="Erin" />
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
    <PopularPosts />
    <InstagramPhotos />
  </div>
)

export default Sidebar

//will move later

class SocialForm extends Component {
  render() {
    return (
      <div className="social-form">
        <section className="social-icons">
          <a
            href="http://www.instagram.com/erin.turingan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="instagram-icon"
              src="/icons/instagram-icon.png"
              alt="instagram"
            />
          </a>
          <a
            href="https://twitter.com/erinturingan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="twitter-icon"
              src="/icons/twitter-icon.png"
              alt="twitter"
            />
          </a>
          <a
            href="http://www.bloglovin.com/@coffeemeetspolished"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="bloglovin-icon"
              src="/icons/bloglovin-icon.png"
              alt="bloglovin"
            />
          </a>
        </section>
      </div>
    )
  }
}

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

class PopularPosts extends Component {
  render() {
    return (
      <div className="popular-posts">
        <h3>Popular Posts</h3>
        <nav>
          <ul>
            <a href="/articles/new-podcast-discoveries-female-hosts">
              <img
                src="/images/newpodcastdiscoveriesfemalehosts-preview.png"
                alt="new-podcast-discoveries-female-hosts"
              />
            </a>
            <a href="/articles/making-the-most-of-your-job-transition">
              <img
                src="/images/jobtransition-preview.png"
                alt="making-the-most-of-your-job-transition"
              />
            </a>
            <a href="/articles/when-i-stopped-apologizing-for-needing-solitude">
              <img
                src="/images/solitude-preview.png"
                alt="when-i-stopped-apologizing-for-needing-solitude"
              />
            </a>
            <a href="/articles/19-before-2019-a-goal-setting-challenge">
              <img
                src="/images/19before2019.png"
                alt="19-before-2019-a-goal-setting-challenge"
              />
            </a>
            <a href="/articles/topics-to-normalize-in-2018-periods">
              <img
                src="/images/normalizedconvoperiods.png"
                alt="topics-to-normalize-in-2018-periods"
              />
            </a>
            <a href="/articles/10-affordable-date-night-ideas-in-nyc">
              <img
                src="/images/affordabledatenight-preview.png"
                alt="10-affordable-date-night-ideas-in-nyc"
              />
            </a>
            <a href="/articles/10-essential-tips-for-your-first-protest">
              <img
                src="/images/protest-preview.png"
                alt="10-essential-tips-for-your-first-protest"
              />
            </a>
          </ul>
        </nav>
      </div>
    )
  }
}
