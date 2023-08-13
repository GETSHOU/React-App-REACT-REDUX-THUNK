import todosService from '../../../../js/services/todos.service';
import { setLoading } from '../../actions/index';

const sortingTodos = (sortingType) => {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const data = await todosService.sorting(sortingType);

			if (sortingType === 'text') {
				dispatch({ type: 'SORTING_TODO_SUCCESS', payload: data });
			} else {
				throw new Error('Тип сортировки должен быть - "text"!');
			}
		} catch (error) {
			dispatch({ type: 'SORTING_TODO_ERROR', payload: error.message });
			throw new Error(error);
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export default sortingTodos;
