import _ from 'lodash'
import React from 'react'

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

	const handleClick = (index: number) => {
		if (index < 0 || index === pagesCount) {
			return
		}
		setIndex(index)
	}

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
