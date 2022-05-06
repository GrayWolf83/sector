import _ from 'lodash'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IPaginationProps {
	pageIndex: number
	pagesCount: number
	setIndex: (index: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
	pageIndex,
	pagesCount,
	setIndex,
}) => {
	const pages = _.range(1, pagesCount + 1)
	const [, setSearchParams] = useSearchParams()

	useEffect(() => {
		pageIndex <= 0
			? setSearchParams({})
			: setSearchParams({ page: (pageIndex + 1).toString() })
	}, [pageIndex, setSearchParams])

	const handleClick = (index: number) => {
		if (index < 0 || index === pagesCount) {
			return
		}
		setIndex(index)
	}

	if (pagesCount === 0) return null

	return (
		<div className='pagination'>
			<span
				className='pagination__link'
				onClick={() => handleClick(pageIndex - 1)}>
				Назад
			</span>
			<div className='pagination__pages'>
				{pages.map((page) => (
					<span
						className={`pagination__page ${
							page === pageIndex + 1
								? 'pagination__page--active'
								: ''
						}`}
						key={page}>
						{page}
					</span>
				))}
			</div>

			<span
				className='pagination__link'
				onClick={() => handleClick(pageIndex + 1)}>
				Далее
			</span>
		</div>
	)
}

export default Pagination
