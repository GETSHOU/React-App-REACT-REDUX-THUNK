import styles from './TodoListTools.module.css';

export const TodoListTools = ({handleCreateTodo, fieldValue}) => {
	return (
		<div className={styles.tools}>
			<button className={`${styles.button} ${styles.addButton}`}
							onClick={() => handleCreateTodo({text: fieldValue.trim()})}
							disabled={fieldValue.trim().length === 0}>ADD
			</button>
		</div>
	)
}
