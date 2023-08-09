import { useDispatch } from 'react-redux';
import * as action from '../../../../js/actions/index';
import styles from './TodoHeaderTools.module.css';

export const TodoHeaderTools = ({fieldValue}) => {
	const dispatch = useDispatch();

	const handleCreateTodo = (text) => {
    dispatch(action.createTodo(text));
		dispatch(action.setValueCreateTodo(''));
  }

	return (
		<div className={styles.tools}>
			<button className={`${styles.button} ${styles.addButton}`}
							onClick={() => handleCreateTodo({text: fieldValue.trim()})}
							disabled={fieldValue.trim().length === 0}>ADD
			</button>
		</div>
	)
}
