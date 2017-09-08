import { combineReducers } from 'redux'

import {
	DISPLAY_CATEGORY_CHANGER,
	CHANGE_CATEGORY,
	DISPLAY_POSTS_SORTER,
	SORT_POSTS,
	DISPLAY_POSTS_EDITOR,
	SUBMIT_POST,
	RECEIVE_ALL_POSTS,
	RECEIVE_POST,
	GET_USER,
	DISPLAY_USER_LOGIN,
	LOGIN_USER,
	ACTIVE_POST,
	VOTE_POST,
	RECEIVE_COMMENTS,
	RECEIVE_COMMENT,
} from '../actions'

const initialCategoriesList = {
	all: {
		category: 'all',
		img: 'all.svg',
		title: 'all topics',
	},
	react: {
		category: 'react',
		img: 'react.svg',
		title: 'react',
	},
	redux: {
		category: 'redux',
		img: 'redux.png',
		title: 'redux',
	},
	udacity: {
		category: 'udacity',
		img: 'udacity.svg',
		title: 'udacity',
	},
}

function categoryList (state = initialCategoriesList) {
	return {
		...initialCategoriesList,
	}
}


const initialCategorySelectorState = {
	isModalOpen: false,
	category: 'all',
}

function activeCategory (state = initialCategorySelectorState, action) {
	switch (action.type) {
		case DISPLAY_CATEGORY_CHANGER:
			return {
				...state,
				isModalOpen: action.isModalOpen
			}
		case CHANGE_CATEGORY: 
			return {
				...state,
				isModalOpen: false,
				category: action.newCategory
			}
		default:
			return state
	}
}


const initialSortByList = {
	default: {
		name: 'timestamp',
		img: 'arrange.svg',
		title: 'sort by : ',
	},
	timestamp: {
		name: 'timestamp',
		img: 'timestamp.svg',
		title: 'lastest reply',
	},
	vote: {
		name: 'vote',
		img: 'vote.svg',
		title: '# of votes',
	},
}

function sortByList (state = initialSortByList) {
	return {
		...initialSortByList,
	}
}

const initialPostsSortByState = {
	isModalOpen: false,
	sortBy: 'timestamp',
}

function sortPosts (state = initialPostsSortByState, action) {
	switch (action.type) {
		case DISPLAY_POSTS_SORTER:
			return {
				...state,
				isModalOpen: action.isModalOpen
			}
		case SORT_POSTS:
			return {
				...state,
				isModalOpen: false,
				sortBy: action.sortBy,
			}
		default:
			return state
	}
}

const initialPostEditorState = {
	isModalOpen: false,
	title: null,
	content: null,
}

function postEditor (state = initialPostEditorState, action) {
	switch (action.type) {
		case DISPLAY_POSTS_EDITOR:
			return {
				...state,
				isModalOpen: action.isModalOpen,
			}
		case SUBMIT_POST:
			return {
				...state,
				isModalOpen: false,
			}
		default:
			return state
	}
}


function allPosts (state = {}, action) {
	switch (action.type) {
		case RECEIVE_ALL_POSTS:
			return {
				...state,
				posts: action.posts,
			}
		case RECEIVE_POST: 
			return {
				...state,
				posts: {
					...state.posts,
					[state.posts.length]: action.post,
				}
			}
		default:
			return state
	}
}


const initialUserState = {
	user: null,
	isModalOpen: true,
}

function user (state = initialUserState, action) {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				user: action.user,
			}
		case DISPLAY_USER_LOGIN:
			return {
				...state,
				isModalOpen: action.isModalOpen,
			}
		case LOGIN_USER: 
			return {
				...state,
				user: action.user,
				isModalOpen: false,
			}
		default: 
			return state
	}
}

function activePost (state={}, action) {
	switch (action.type) {
		case ACTIVE_POST:
			return {
				...state,
				post: action.post,
			}
		case VOTE_POST:
			return {
				...state,
				post: action.post,
			}
		case RECEIVE_COMMENTS:
			return {
				...state,
				comments: action.comments,
			}
		case RECEIVE_COMMENT: 
			return {
				...state,
				comments: {
					...state.comments,
					[Object.keys(state.comments).length]: action.comment,
				}
			}
		default:
			return state
	}
}

export default combineReducers({
	categoryList,
	activeCategory,
	sortByList,
	sortPosts,
	postEditor,
	allPosts,
	user,
	activePost,
}) 