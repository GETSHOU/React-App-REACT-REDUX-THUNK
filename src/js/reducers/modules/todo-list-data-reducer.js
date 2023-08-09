const todoListDataReducer = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODO_LIST_SUCCESS':
		case 'SORTING_TODO_SUCCESS':
		case 'SEARCH_TODO_SUCCESS':
			return payload;
		case 'GET_TODO_LIST_ERROR':
		case 'SORTING_TODO_ERROR':
		case 'SEARCH_TODO_ERROR':
			return [];
		case 'CREATE_TODO_SUCCESS':
			return [...state, payload];
		default:
			return state;
	}
};

export default todoListDataReducer;
