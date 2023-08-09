import todosService from '../../services/todos.service';
import * as action from '../../actions/index';

const editTodo = (id, text) => {
	return async (dispatch, getState) => {
		const dataTodoList = getState().dataTodoList;

		dispatch(action.setLoading(true));

		try {
			const todoPosition = dataTodoList.findIndex((todo) => todo.id === id);
			const currentTodo = dataTodoList.find((todo) => todo.id === id);

			if (todoPosition !== -1) {
				const data = await todosService.edit(id, currentTodo, text.trim());
				const updatedTodo = await data.json();

				const copyDataToDoList = dataTodoList.slice();
				copyDataToDoList[todoPosition] = updatedTodo;

				dispatch({ type: 'UPDATE_TODO_LIST_SUCCESS', payload: copyDataToDoList });
			}
		} catch (error) {
			dispatch({ type: 'UPDATE_TODO_LIST_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(action.setLoading(false));
		}
	};
};

export default editTodo;
