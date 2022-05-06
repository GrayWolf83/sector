import React from 'react'
import { Post } from '../../types/post'
import { HomeSearch } from '../../types/home-search'

interface ITitle {
	title: string
	sortName: string
}

interface ITableComponentProps {
	onSort: ({ name, arrow }: HomeSearch) => void
	sort: HomeSearch
	items: Post[]
}

const TableComponent: React.FC<ITableComponentProps> = ({
	onSort,
	sort,
	items,
}) => {
	const titles = [
		{ title: 'ID', sortName: 'id' },
		{ title: 'Заголовок', sortName: 'title' },
		{ title: 'Описание', sortName: 'body' },
	]

	const handleSort = (item: ITitle) => {
		onSort({
			name: item.sortName,
			arrow:
				sort.name === item.sortName && sort.arrow === 'asc'
					? 'desc'
					: 'asc',
		})
	}

	const getIcon = (item: ITitle) => {
		if (item.sortName === sort.name) {
			return `ms-4 bi bi-chevron-${sort.arrow === 'asc' ? 'down' : 'up'}`
		}
		return `ms-4 bi bi-chevron-down`
	}

	return (
		<table className='table table-bordered'>
			<thead className='bg-dark text-light'>
				<tr className='text-center'>
					{titles.map((item) => (
						<th
							scope='col'
							key={item.title}
							onClick={() => handleSort(item)}>
							{item.title}
							<i className={getIcon(item)} />
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items.length ? (
					items.map((item) => (
						<tr key={item.id}>
							<th scope='row' className='text-center'>
								{item.id}
							</th>
							<td>{item.title}</td>
							<td>{item.body}</td>
						</tr>
					))
				) : (
					<tr>
						<td className='text-center' colSpan={3}>
							Нет записей для отображения.
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default TableComponent
