import todosService from '../../services/todos.service';

const searchQuery = (valueSearchQuery) => {
	return async (dispatch) => {
		try {
			const data = await todosService.search(valueSearchQuery);

			dispatch({ type: 'SEARCH_TODO_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'SEARCH_TODO_ERROR', payload: error.message });
			throw new Error(error);
		}
	};
};

export default searchQuery;
