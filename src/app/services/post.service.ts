import httpService from './http.service'

const endpoint = 'posts/'

const postService = {
	getPosts: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
}

export default postService
