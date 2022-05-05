import React, { useState } from 'react'
import TableComponent from '../components/ui/table-component'
import { useAppSelector } from '../hooks/useAppReduxHooks'
import { getPaginatePosts } from '../store/post'
import _ from 'lodash'
import Pagination from '../components/common/pagination'
import { useParams } from 'react-router-dom'

const Home = () => {
	const [sort, setSort] = useState<{
		name: string
		arrow: boolean | 'asc' | 'desc'
	}>({ name: 'id', arrow: 'asc' })
	const { pageNum } = useParams()
	const pageIndex = pageNum ? Number(pageNum) : 1

	const paginatePosts = useAppSelector(getPaginatePosts(pageIndex - 1))

	const handleSort = (name: string, arrow: boolean | 'asc' | 'desc') => {
		setSort({ name, arrow })
	}

	const tableTitles = [
		{ title: 'ID', sortName: 'id' },
		{ title: 'Заголовок', sortName: 'title' },
		{ title: 'Описание', sortName: 'body' },
	]

	const sortedPosts = _.orderBy(paginatePosts, [sort.name], [sort.arrow])

	return (
		<>
			<TableComponent
				sort={sort}
				items={sortedPosts}
				titles={tableTitles}
				onSort={handleSort}
			/>
			<Pagination pageIndex={pageIndex} />
		</>
	)
}

export default Home
