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

export { setValueCreateTodo, setValueSearchQuery };
