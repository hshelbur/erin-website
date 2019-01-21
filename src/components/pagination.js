import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({current, perPage, totalCount, linkForPage}) => {
	const numPages = Math.ceil(totalCount / perPage)

	return <div className="center-pagination">
        <ul className="pagination">
            {current !== 1 && <li><a href={linkForPage(1)}>First</a></li>}
            {current !== 1 && <li><a href={linkForPage(current - 1)}>Previous</a></li>}
            {Array.from({length: numPages}).map((_, index) =>
                <li key={index}>
                    <a className={current === index+1 ? `active` : ``} href={linkForPage(index+1)}>{index+1}</a>
                </li>
            )}
            {current !== numPages && <li><a href={linkForPage(current + 1)}>Next</a></li>}
            {current !== numPages && <li><a href={linkForPage(numPages)}>Last</a></li>}
        </ul>
    </div>
}

Pagination.propTypes = {
	current: PropTypes.number.isRequired,
	perPage: PropTypes.number.isRequired,
	totalCount: PropTypes.number.isRequired,
	linkForPage: PropTypes.func.isRequired,
}

export default Pagination