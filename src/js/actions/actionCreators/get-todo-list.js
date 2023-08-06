import todosService from '../../services/todos.service';

const getTodoList = () => {
	return async (dispatch) => {
		dispatch({ type: 'GET_TODO_LIST_LOADING' });

		try {
			const data = await todosService.get();

			dispatch({ type: 'GET_TODO_LIST_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'GET_TODO_LIST_ERROR', payload: error.message });
			throw new Error(error);
		}
	};
};

export { getTodoList };
