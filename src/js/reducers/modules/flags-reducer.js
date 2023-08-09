const initialState = {
	isLoading: false,
};

const flagsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export default flagsReducer;
