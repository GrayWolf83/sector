import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../types/post'
import postService from '../services/post.service'

type PostsState = {
	entities: Post[]
	isLoading: boolean
	dataLoaded: boolean
}

const initialState: PostsState = {
	entities: [],
	isLoading: true,
	dataLoaded: false,
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postsLoaded(state, action: PayloadAction<Post[]>) {
			state.entities = action.payload
			state.dataLoaded = true
		},
		postsLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { postsLoaded, postsLoadingEnd } = postSlice.actions

export const loadPostsList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await postService.getPosts()
		dispatch(postsLoaded(payload))
	} catch (error: any) {
		if (error?.message) {
			dispatch(setLoadingError(error.message))
		}
	} finally {
		dispatch(postsLoadingEnd())
	}
}

export const getPostsPagesCount = () => (state: RootState) => {
	return Math.ceil(state.posts.entities.length / 10)
}

export const getPostsDataLoadedStatus = () => (state: RootState) => {
	return state.posts.dataLoaded
}
export const getPostsLoadingStatus = () => (state: RootState) => {
	return state.posts.isLoading
}

export const getPaginatePosts = (index: number) => (state: RootState) => {
	const start = index * 10
	return state.posts.entities.slice(start, start + 10)
}

export default postSlice.reducer
