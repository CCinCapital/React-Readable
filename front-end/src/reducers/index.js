import { combineReducers } from 'redux'

import {
	DISPLAY_CATEGORY_CHANGER,
	CHANGE_CATEGORY,
	DISPLAY_POSTS_SORTER,
	SORT_POSTS,
} from '../actions'


const initialCategoriesState = {
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

function categoryList (state = initialCategoriesState) {
	return {
		...initialCategoriesState,
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

export default combineReducers({
	categoryList,
	activeCategory,
	sortPosts,
}) 