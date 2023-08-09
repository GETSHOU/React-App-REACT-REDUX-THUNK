import todosService from '../../services/todos.service';
import { setLoading } from '../../actions/index';

const createTodo = (text) => {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const data = await todosService.create(text);

			dispatch({ type: 'CREATE_TODO_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'CREATE_TODO_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export default createTodo;
