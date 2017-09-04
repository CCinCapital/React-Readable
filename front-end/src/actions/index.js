export const DISPLAY_CATEGORY_CHANGER = 'DISPLAY_CATEGORY_CHANGER'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export const DISPLAY_POSTS_SORTER = 'DISPLAY_POSTS_SORTER'
export const SORT_POSTS = 'SORT_POSTS'

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