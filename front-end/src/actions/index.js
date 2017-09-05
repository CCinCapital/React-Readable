import * as fetch from '../utils/API'

export const DISPLAY_CATEGORY_CHANGER = 'DISPLAY_CATEGORY_CHANGER'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const DISPLAY_POSTS_SORTER = 'DISPLAY_POSTS_SORTER'
export const SORT_POSTS = 'SORT_POSTS'

export const DISPLAY_POSTS_EDITOR = 'DISPLAY_POSTS_EDITOR'
export const SUBMIT_POST = 'SUBMIT_POST'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"

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

export function submitPost ({ title, content }) {
	return {
		type: SUBMIT_POST,
		title,
		content,
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