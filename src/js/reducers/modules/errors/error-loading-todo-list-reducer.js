const errorLoadingTodoListReducer = (state = null, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODO_LIST_ERROR':
			return payload;

		case 'GET_TODO_LIST_SUCCESS':
			return null;
		default:
			return state;
	}
};

export default errorLoadingTodoListReducer;
