import React from 'react'

interface ISerchBarProps {
	search: string
	setSearch: (value: string) => void
}

const SearchBar: React.FC<ISerchBarProps> = ({ search, setSearch }) => {
	const handleSearchValue: React.ChangeEventHandler<HTMLInputElement> = (
		e,
	) => {
		setSearch(e.target.value.toLowerCase())
	}

	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Поиск'
				value={search}
				onChange={handleSearchValue}
			/>
			<span className='input-group-text'>
				<i className='bi bi-search' />
			</span>
		</div>
	)
}

export default SearchBar
