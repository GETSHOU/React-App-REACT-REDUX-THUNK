import styles from './TodoItemTools.module.css';

export const TodoItemTools = ({
	id,
	isEdit,
	handleEdit,
	handleCancel,
	valueEditTodo,
	handleUpdateTodo,
	handleDeleteTodo,
	valueEditTodoChanged
}) => {
	return (
		<div className={styles.tools}>
			{!isEdit
				? <>
						<button className={`${styles.button} ${styles.editButton}`}
										onClick={() => handleEdit()}>EDIT
						</button>
						<button className={`${styles.button} ${styles.deleteButton}`}
										onClick={() => handleDeleteTodo(id)}>DEL
						</button>
					</>
				: <>
						<button className={`${styles.button} ${styles.saveButton}`}
										onClick={() => handleUpdateTodo(id, valueEditTodo.trim())}
										disabled={!valueEditTodoChanged}>SAVE
						</button>
						<button className={`${styles.button} ${styles.cancelButton}`}
										onClick={() => handleCancel()}>CANCEL
						</button>
					</>
			}
		</div>
	)
}
