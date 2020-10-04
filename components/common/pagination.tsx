const React = require('react');
const _ = require('lodash');
import { Nav } from 'react-bootstrap';

const Pagination = (props: any) => {
	const { itemsCount, pageSize, onPageChange, currentPage } = props;
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);
	return (
		<Nav>
			<ul className="pagination">
				{pages.map((page: any) => (
					<li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
						<a className="page-link" onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</Nav>
	);
};

export default Pagination;
