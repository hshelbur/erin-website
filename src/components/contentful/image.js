import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ title, description, full }) => (
  <Img title={title} alt={description} fluid={full} />
)

Image.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  full: PropTypes.object.isRequired,
}

export default Image

export const contentfulImageFragment = graphql`
  fragment ContentfulImageFragment on ContentfulAsset {
    title
    description
    full: fluid(maxWidth: 1200) {
      ...GatsbyContentfulFluid
    }
  }
`
