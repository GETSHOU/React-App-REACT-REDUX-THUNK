const errorLoadingTodoListReducer = (state = null, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODO_LIST_ERROR':
		case 'CREATE_TODO_ERROR':
			return payload;
		case 'GET_TODO_LIST_SUCCESS':
		case 'CREATE_TODO_SUCCESS':
			return null;
		default:
			return state;
	}
};

export default errorLoadingTodoListReducer;
