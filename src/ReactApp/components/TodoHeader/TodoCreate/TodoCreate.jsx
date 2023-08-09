import { useDispatch, useSelector } from 'react-redux';
import * as selector from '../../../../js/selectors/index';
import * as action from '../../../../js/actions/index';
import { TodoHeaderTools } from '../../TodoTools/TodoHeaderTools/TodoHeaderTools';
import styles from './TodoCreate.module.css';

export const TodoCreate = () => {
	const fieldValue = useSelector(selector.valueCreateTodoState);

	const dispatch = useDispatch();

	const handleChangeCreateTodo = (text) => dispatch(action.setValueCreateTodo(text));

	return (
		<>
			<input
				type="text"
				className={`${styles.field}`}
				value={fieldValue}
				onChange={({target}) => handleChangeCreateTodo(target.value)}
			/>
			<TodoHeaderTools fieldValue={fieldValue} />
		</>
	)
}
