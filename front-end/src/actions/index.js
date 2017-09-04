export const DISPLAY_CATEGORY_CHANGER = 'DISPLAY_CATEGORY_CHANGER'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

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