const loadingReducer = (state = false, action) => {
	const { type } = action;

	switch (type) {
		case 'GET_TODO_LIST_LOADING':
		case 'CREATE_TODO_LOADING':
			return true;
		case 'GET_TODO_LIST_SUCCESS':
		case 'GET_TODO_LIST_ERROR':
		case 'CREATE_TODO_SUCCESS':
		case 'CREATE_TODO_ERROR':
			return false;
		default:
			return state;
	}
};

export default loadingReducer;
