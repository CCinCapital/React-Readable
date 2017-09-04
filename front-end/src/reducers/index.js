import { combineReducers } from 'redux'

import {
	DISPLAY_CATEGORY_CHANGER,
	CHANGE_CATEGORY,
	DISPLAY_POSTS_SORTER,
	SORT_POSTS,
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

export default combineReducers({
	categoryList,
	activeCategory,
	sortByList,
	sortPosts,
}) 