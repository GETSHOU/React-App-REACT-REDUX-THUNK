import { useTodos } from '../../../hooks/useTodos';
import styles from './TodoCreate.module.css';

export const TodoCreate = () => {
	const { handleChangeAddTodo, fieldValueAddTodo } = useTodos();

	return (
		<input
			type="text"
			className={`${styles.field}`}
			value={fieldValueAddTodo}
			onChange={handleChangeAddTodo}
		/>
	)
}
