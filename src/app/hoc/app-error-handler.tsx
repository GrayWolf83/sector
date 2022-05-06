import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../hooks/useAppReduxHooks'
import { clearErrors, getError } from '../store/error'

interface IAppLoaderProps {
	children: JSX.Element
}

const AppErrorHandler = ({ children }: IAppLoaderProps) => {
	const dispatch = useAppDispatch()
	const error = useAppSelector(getError())

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}
	}, [error, dispatch])

	return children
}

export default AppErrorHandler
