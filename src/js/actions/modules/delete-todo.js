import todosService from '../../services/todos.service';
import * as action from '../../actions/index';

const deleteTodo = (id) => {
	return async (dispatch, getState) => {
		const dataTodoList = getState().dataTodoList;
		const filterTodoListById = dataTodoList.filter((todo) => todo.id !== id);

		dispatch(action.setLoading(true));

		try {
			await todosService.delete(id);

			dispatch({ type: 'DELETE_TODO_SUCCESS', payload: filterTodoListById });
		} catch (error) {
			dispatch({ type: 'DELETE_TODO_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(action.setLoading(false));
		}
	};
};

export default deleteTodo;
