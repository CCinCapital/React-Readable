export const MOCK_RECUDER = 'MOCK_RECUDER'

export function mockReducer ({ para1, para2, para3 }) {
	return {
		type: MOCK_RECUDER,
		para1,
		para2,
		para3,
	}
}