import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({current, perPage, totalCount, linkForPage}) => {
	const numPages = Math.ceil(totalCount / perPage)

	return <div className="center-pagination">
        <ul className="pagination">
            {current > 1 && <li><Link to={linkForPage(1)}>First</Link></li>}
            {current > 1 && <li><Link to={linkForPage(current - 1)}>Previous</Link></li>}
            {Array.from({length: numPages}).map((_, index) =>
                <li key={index}>
                    <Link className={current === index+1 ? `active` : ``} to={linkForPage(index+1)}>{index+1}</Link>
                </li>
            )}
            {current < numPages && <li><Link to={linkForPage(current + 1)}>Next</Link></li>}
            {current < numPages && <li><Link to={linkForPage(numPages)}>Last</Link></li>}
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