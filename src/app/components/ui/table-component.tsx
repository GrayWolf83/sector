import React from 'react'
import { Post } from '../../types/post'

interface ITitle {
	title: string
	sortName: string
}

interface ITableComponentProps {
	titles: ITitle[]
	onSort: (name: string, arrow: boolean | 'asc' | 'desc') => void
	sort: { name: string; arrow: boolean | 'asc' | 'desc' }
	items: Post[]
}

const TableComponent: React.FC<ITableComponentProps> = ({
	titles,
	onSort,
	sort,
	items,
}) => {
	const handleSort = (item: ITitle) => {
		onSort(
			item.sortName,
			sort.name === item.sortName && sort.arrow === 'asc'
				? 'desc'
				: 'asc',
		)
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
				{items.map((item) => (
					<tr key={item.id}>
						<th scope='row'>{item.id}</th>
						<td>{item.title}</td>
						<td>{item.body}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TableComponent
