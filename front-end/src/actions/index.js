import * as fetch from '../utils/API'

export const DISPLAY_CATEGORY_CHANGER = 'DISPLAY_CATEGORY_CHANGER'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const DISPLAY_POSTS_SORTER = 'DISPLAY_POSTS_SORTER'
export const SORT_POSTS = 'SORT_POSTS'

export const DISPLAY_POSTS_EDITOR = 'DISPLAY_POSTS_EDITOR'
export const SUBMIT_POST = 'SUBMIT_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"

export const GET_USER = 'GET_USER'

export const ACTIVE_POST = 'ACTIVE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'


export function displayCategoryChanger (isModalOpen) {
	return {
		type: DISPLAY_CATEGORY_CHANGER,
		isModalOpen,
	}
}

export function changeCategory (newCategory) {
	return {
		type: CHANGE_CATEGORY,
		newCategory,
	}
}

export function displayPostsSorter (isModalOpen) {
	return {
		type: DISPLAY_POSTS_SORTER,
		isModalOpen,
	}
}

export function sortPosts (sortBy) {
	return {
		type: SORT_POSTS,
		sortBy,
	}
}

export function displayPostEditor (isModalOpen) {
	return {
		type: DISPLAY_POSTS_EDITOR,
		isModalOpen,
	}
}

export function receiveAllPosts (posts) {
	return {
		type: RECEIVE_ALL_POSTS,
		posts,
	}
}

export function fetchAllPosts () {
	return dispatch => {
		fetch
			.getAllPosts()
			.then(posts => dispatch(receiveAllPosts(posts)))
	}
}

export function receivePost (post) {
	return {
		type: RECEIVE_POST,
		post,
	}
}

export function submitPost ({ id, timestamp, title, body, author, category }) {
	return dispatch => {
		fetch
			.addNewPost(id, timestamp, title, body, author, category)
			.then(post => dispatch(receivePost(post)))
	}
}

export function receiveComments (comments) {
	return {
		type: RECEIVE_COMMENTS,
		comments,
	}
}

export function fetchCommentsUnderPost (post_id) {
	return dispatch => {
		fetch
			.getALLCommentsOfPost(post_id)
			.then(comments => dispatch(receiveComments(comments)))
	}
}

export function activePost (post) {
	return {
		type: ACTIVE_POST,
		post,
	}
}

export function getUser (user) {
	return {
		type: GET_USER,
		user,
	}
}