import todosService from '../../../../js/services/todos.service';
import * as action from '../index';

const removeTodo = (id) => {
	return async (dispatch, getState) => {
		const dataTodoList = getState().dataTodoList;
		const filterTodoListById = dataTodoList.filter((todo) => todo.id !== id);

		dispatch(action.setLoading(true));

		try {
			await todosService.remove(id);

			dispatch({ type: 'REMOVE_TODO_SUCCESS', payload: filterTodoListById });
		} catch (error) {
			dispatch({ type: 'REMOVE_TODO_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(action.setLoading(false));
		}
	};
};

export default removeTodo;
