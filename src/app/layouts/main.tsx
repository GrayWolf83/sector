import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
	return (
		<div className='container mt-2'>
			<Outlet />
		</div>
	)
}

export default Main
