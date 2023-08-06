const todoListDataReducer = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODO_LIST_SUCCESS':
			return payload;
		case 'GET_TODO_LIST_ERROR':
			return [];
		default:
			return state;
	}
};

export default todoListDataReducer;
