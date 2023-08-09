const initialState = {
	isLoading: false,
	valueCreateTodo: '',
	valueSearchQuery: '',
};

const flagsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: payload,
			};
		case 'SET_VALUE_CREATE_TODO':
			return {
				...state,
				valueCreateTodo: payload,
			};
		case 'SET_VALUE_SEARCH_QUERY':
			return {
				...state,
				valueSearchQuery: payload,
			};
		default:
			return state;
	}
};

export default flagsReducer;
