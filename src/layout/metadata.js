import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Metadata = ({ name, title, keywords, description, image, url }) => (
  <Helmet>
    {name && <meta name="application-name" content={name} />}
    {title && <title>{title}</title>}
    {title && <meta name="apple-mobile-web-app-title" content={title} />}
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}

    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {url && <meta property="og:url" content={url} />}

    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta name="twitter:image" content={image} />}
    {image && <meta name="twitter:card" content={image} />}
    {description && <meta name="twitter:image:alt" content={description} />}
  </Helmet>
)

export default Metadata

Metadata.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
}
