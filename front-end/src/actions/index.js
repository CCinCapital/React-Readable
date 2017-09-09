import * as fetchAPI from '../utils/API'

export const DISPLAY_CATEGORY_CHANGER = 'DISPLAY_CATEGORY_CHANGER'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const DISPLAY_POSTS_SORTER = 'DISPLAY_POSTS_SORTER'
export const SORT_POSTS = 'SORT_POSTS'

export const DISPLAY_POSTS_EDITOR = 'DISPLAY_POSTS_EDITOR'
export const SUBMIT_POST = 'SUBMIT_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"

export const GET_USER = 'GET_USER'
export const DISPLAY_USER_LOGIN = 'DISPLAY_USER_LOGIN'
export const LOGIN_USER = 'LOGIN_USER'

export const ACTIVE_POST = 'ACTIVE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const POST_COMMENT = 'POST_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'


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
		fetchAPI
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
		fetchAPI
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
		fetchAPI
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

export function displayUserLogin (isModalOpen) {
	return {
		type: DISPLAY_USER_LOGIN,
		isModalOpen,
	}
}

export function loginUser (user) {
	return {
		type: LOGIN_USER,
		user,
	}
}

export function receiveComment (comment) {
	return {
		type: RECEIVE_COMMENT,
		comment,
	}
}

export function postComment ( {comment_id, timestamp, body, author, parentId} ) {
	return dispatch => {
		fetchAPI
			.addCommentToPost ( {comment_id, timestamp, body, author, parentId} )
			.then(comment => dispatch(receiveComment(comment)))
	}
}

export function votePost ( post_id, option) {
	return dispatch => {
		fetchAPI
			.votePost ( post_id, option )
			.then (post => dispatch(updatePost(post)))
	}
}

export function updatePost (post) {
	return {
		type: UPDATE_POST,
		post,
	}
}

export function voteComment ( comment_id, option) {
	return dispatch => {
		fetchAPI
			.voteComment ( comment_id, option )
			.then (comment => dispatch(updateComment(comment)))
	}
}

export function updateComment (comment) {
	return {
		type: UPDATE_COMMENT,
		comment,
	}
}