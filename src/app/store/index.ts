import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './post'
import errorsReducer from './error'

const store = configureStore({
	reducer: {
		posts: postsReducer,
		errors: errorsReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
