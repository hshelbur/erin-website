import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

const HTML = ({dangerouslySetContent}) => (
	<React.Fragment>{parse(dangerouslySetContent)}</React.Fragment>
)

HTML.propTypes = {
	dangerouslySetContent: PropTypes.string.isRequired,
}

export default HTML

export const DangerousHTML = ({children}) => (
	<HTML dangerouslySetContent={children} />
)