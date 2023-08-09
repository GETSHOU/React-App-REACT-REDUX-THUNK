import todosService from '../../services/todos.service';
import * as action from '../../actions/index';

const getTodoList = () => {
	return async (dispatch) => {
		dispatch(action.setLoading(true));

		try {
			const data = await todosService.get();

			dispatch({ type: 'GET_TODO_LIST_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'GET_TODO_LIST_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(action.setLoading(false));
		}
	};
};

export default getTodoList;
