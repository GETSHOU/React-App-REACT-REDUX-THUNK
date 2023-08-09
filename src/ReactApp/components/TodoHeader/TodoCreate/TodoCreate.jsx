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

	const handleChangeCreateTodo = ({target}) => dispatch(action.setValueCreateTodo(target.value));

	return (
		<>
			<input
				type="text"
				className={`${styles.field}`}
				value={fieldValue}
				onChange={handleChangeCreateTodo}
			/>
			<TodoListTools handleCreateTodo={handleCreateTodo} fieldValue={fieldValue}/>
		</>
	)
}
