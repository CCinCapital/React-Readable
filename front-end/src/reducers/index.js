import { combineReducers } from 'redux'

import {
	CHANGE_CATEGORY,
	DISPLAY_CATEGORY_CHANGER,
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

const initialCategorySelectorState = {
	isModalOpen: false,
	category: 'all',
}

function categoryList (state = initialCategoriesState) {
	return {
		...initialCategoriesState,
	}
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


export default combineReducers({
	categoryList,
	activeCategory,
}) 