import { useEffect } from 'react'
import Loader from '../components/common/loader'
import { useAppDispatch, useAppSelector } from '../hooks/useAppReduxHooks'
import {
	getPostsDataLoadedStatus,
	getPostsLoadingStatus,
	loadPostsList,
} from '../store/post'

interface IAppLoaderProps {
	children: JSX.Element
}

const AppLoader = ({ children }: IAppLoaderProps) => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getPostsDataLoadedStatus())
	const isLoading = useAppSelector(getPostsLoadingStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadPostsList())
		}
	}, [dataLoaded, dispatch])

	if (isLoading) return <Loader />
	return children
}

export default AppLoader
