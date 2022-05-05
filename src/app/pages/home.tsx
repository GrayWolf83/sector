import React, { useState } from 'react'
import TableComponent from '../components/ui/table-component'
import { useAppSelector } from '../hooks/useAppReduxHooks'
import { getPostsList } from '../store/post'
import _ from 'lodash'
import Pagination from '../components/common/pagination'
import SearchBar from '../components/ui/search-bar'
import { HomeSearch } from '../types/home-search'

const Home = () => {
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState<HomeSearch>({ name: 'id', arrow: 'asc' })
	const [pageIndex, setPageIndex] = useState(0)
	const perPage = 10
	const posts = useAppSelector(getPostsList())

	const handleSort = ({ name, arrow }: HomeSearch) => {
		setSort({ name, arrow })
	}

	const searchedPosts = posts.filter(
		(post) =>
			post.id.toString().includes(search) ||
			post.title.toLocaleLowerCase().includes(search) ||
			post.body.toLowerCase().includes(search),
	)

	const paginatePosts = searchedPosts.slice(
		pageIndex * perPage,
		pageIndex * perPage + 10,
	)

	const sortedPosts = _.orderBy(paginatePosts, [sort.name], [sort.arrow])

	return (
		<div className='mt-2'>
			<div className='row'>
				<div className='col-12 col-md-6'>
					<SearchBar search={search} setSearch={setSearch} />
				</div>
			</div>

			<div className='mt-2'>
				<TableComponent
					sort={sort}
					items={sortedPosts}
					onSort={handleSort}
				/>
			</div>

			<Pagination
				pagesCount={Math.ceil(searchedPosts.length / 10)}
				pageIndex={pageIndex}
				setIndex={setPageIndex}
			/>
		</div>
	)
}

export default Home
