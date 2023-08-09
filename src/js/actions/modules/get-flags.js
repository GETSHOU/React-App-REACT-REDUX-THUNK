const setLoading = (value) => {
	return {
		type: 'SET_LOADING',
		payload: value,
	};
};

const setValueCreateTodo = (value) => {
	return {
		type: 'SET_VALUE_CREATE_TODO',
		payload: value,
	};
};

const setValueSearchQuery = (value) => {
	return {
		type: 'SET_VALUE_SEARCH_QUERY',
		payload: value,
	};
};

export { setLoading, setValueCreateTodo, setValueSearchQuery };
