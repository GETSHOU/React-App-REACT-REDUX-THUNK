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

const setValueChangedCreateTodo = (value) => {
	return {
		type: 'SET_VALUE_CHANGED_CREATE_TODO',
		payload: value,
	};
};

export { setLoading, setValueCreateTodo, setValueChangedCreateTodo };
