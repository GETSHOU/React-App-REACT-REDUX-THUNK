import { useState, useRef } from 'react';
import { TodoItemTools } from '../../TodoTools/TodoItemTools/TodoItemTools';
import styles from './TodoItem.module.css';

export const TodoItem = ({id, currentText}) => {
	const [isEdit, setEdit] = useState(false);
	const [fieldValueToDoEdit, setFieldValueToDoEdit] = useState(currentText);
	const [fieldValueToDoEditChanged, setFieldValueToDoEditChanged] = useState(false);

	const inputRef = useRef(null);

	// const handleUpdateTodo = async (id, updatedTodo) => {
	// 	if (updatedTodo !== currentText) {
	// 		await updateTodo(id, updatedTodo);
	// 		setEdit(false);
	// 		console.log('Данные отправлены!');
	// 	} else {
	// 		setEdit(false);
	// 		setFieldValueToDoEditChanged(false);

	// 		return;
	// 	}

	// 	await updateTodo(id, updatedTodo);

	// 	setEdit(false);
	// };

	const handleChangeEditTodo = ({target}) => {
		if (currentText !== target.value && target.value !== '') {
			setFieldValueToDoEdit(target.value);
			setFieldValueToDoEditChanged(true);
		} else {
			setFieldValueToDoEdit(target.value);
			setFieldValueToDoEditChanged(false);
		}
	};

	const handleEdit = () => {
		inputRef.current.focus();
		setEdit(true);
	};

	const handleCancel = () => {
		inputRef.current.focus();
		setFieldValueToDoEdit(currentText);
		setFieldValueToDoEditChanged(false);
		setEdit(false);
	};

	return (
		<li className={styles.item}>
			<input type="text"
				value={currentText}
				readOnly={true}
				className={styles.field}
			/>
		</li>

		// <li className={!isEdit ? styles.item : `${styles.item} ${styles.itemIsEdit}`}>
		// 	<input type="text"
		// 		ref={inputRef}
		// 		value={!isEdit ? currentText : fieldValueToDoEdit}
		// 		readOnly={!isEdit}
		// 		className={!isEdit ? styles.field : `${styles.field} ${styles.fieldIsEdit}`}
		// 		onChange={handleChangeEditTodo}
		// 	/>
		// 	<TodoItemTools
		// 		id={id}
		// 		isEdit={isEdit}
		// 		handleEdit={handleEdit}
		// 		handleCancel={handleCancel}
		// 		handleUpdateTodo={handleUpdateTodo}
		// 		fieldValueToDoEdit={fieldValueToDoEdit}
		// 		fieldValueToDoEditChanged={fieldValueToDoEditChanged}
		// 	/>
		// </li>
	)
}
