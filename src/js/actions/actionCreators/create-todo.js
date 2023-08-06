import todosService from '../../services/todos.service';

const createTodo = (text) => {
	return async (dispatch) => {
		dispatch({ type: 'CREATE_TODO_LOADING' });

		try {
			const data = await todosService.create(text);

			dispatch({ type: 'CREATE_TODO_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'CREATE_TODO_ERROR', payload: error.message });
			throw new Error(error);
		}
	};
};

export { createTodo };
