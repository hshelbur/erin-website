import React from 'react'

const SocialForm = () => {
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

export default SocialForm
