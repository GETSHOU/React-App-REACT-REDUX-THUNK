import styles from './TodoListTools.module.css';

export const TodoListTools = ({handleCreateTodo, fieldValue, fieldValueoChanged}) => {
	return (
		<div className={styles.tools}>
			<button className={`${styles.button} ${styles.addButton}`}
							onClick={() => handleCreateTodo({text: fieldValue})}
							disabled={!fieldValueoChanged}>ADD
			</button>
		</div>
	)
}
