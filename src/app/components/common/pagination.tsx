import _ from 'lodash'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getPostsPagesCount } from '../../store/post'

interface IPaginationProps {
	pageIndex: number
}

const Pagination: React.FC<IPaginationProps> = ({ pageIndex }) => {
	const pagesCount = useAppSelector(getPostsPagesCount())
	const pages = _.range(1, pagesCount + 1)

	return (
		<div className='pagination'>
			<NavLink
				className='pagination__link'
				to={pageIndex <= 2 ? '/' : `/${pageIndex - 1}`}>
				Назад
			</NavLink>
			<div className='pagination__pages'>
				{pages.map((page) => (
					<span
						className={`pagination__page ${
							page === pageIndex ? 'pagination__page--active' : ''
						}`}
						key={page}>
						{page}
					</span>
				))}
			</div>

			<NavLink
				className='pagination__link'
				to={
					pageIndex === pagesCount
						? `/${pageIndex}`
						: `/${pageIndex + 1}`
				}>
				Далее
			</NavLink>
		</div>
	)
}

export default Pagination
