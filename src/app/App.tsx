import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLoader from './hoc/app-loader'
import Main from './layouts/main'
import Home from './pages/home'

function App() {
	return (
		<AppLoader>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route index element={<Home />} />
					<Route path='/:pageIndex' element={<Home />} />
				</Route>
			</Routes>
		</AppLoader>
	)
}

export default App
