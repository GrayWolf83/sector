import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppLoader from './hoc/app-data-loader'
import AppErrorHandler from './hoc/app-error-handler'
import Main from './layouts/main'
import Home from './pages/home'

function App() {
	return (
		<>
			<AppLoader>
				<AppErrorHandler>
					<Routes>
						<Route path='/' element={<Main />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</AppErrorHandler>
			</AppLoader>
			<ToastContainer />
		</>
	)
}

export default App
