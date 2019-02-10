import React from 'react'
import instagramIcon from '../images/instagram-icon.png'
import twitterIcon from '../images/twitter-icon.png'

const SocialForm = () => {
  return (
    <div className="social-form">
      <section className="social-icons">
        <a
          href="http://www.instagram.com/erinturingan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="instagram-icon"
            src={instagramIcon}
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
            src={twitterIcon}
            alt="twitter"
          />
        </a>
      </section>
    </div>
  )
}

export default SocialForm
