import { useDispatch, useSelector } from 'react-redux';
import * as selector from '../../../../js/selectors/index';
import * as action from '../../../../js/actions/index';
import { TodoListTools } from '../../TodoTools/TodoListTools/TodoListTools';
import styles from './TodoCreate.module.css';

export const TodoCreate = () => {
	const fieldValue = useSelector(selector.valueCreateTodoState);

	const dispatch = useDispatch();

	const handleCreateTodo = (text) => {
    dispatch(action.createTodo(text));
		dispatch(action.setValueCreateTodo(''));
  }

	const handleChangeCreateTodo = (text) => dispatch(action.setValueCreateTodo(text));

	return (
		<>
			<input
				type="text"
				className={`${styles.field}`}
				value={fieldValue}
				onChange={({target}) => handleChangeCreateTodo(target.value)}
			/>
			<TodoListTools handleCreateTodo={handleCreateTodo} fieldValue={fieldValue}/>
		</>
	)
}
