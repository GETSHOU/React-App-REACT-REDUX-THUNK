import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import * as action from '../../../../js/actions/index';
import { TodoItemTools } from '../../TodoTools/TodoItemTools/TodoItemTools';
import styles from './TodoItem.module.css';

export const TodoItem = ({id, currentTextTodo}) => {
	const [isEdit, setEdit] = useState(false);
	const [valueEditTodo, setValueEditTodo] = useState(currentTextTodo);
	const [valueEditTodoChanged, setValueEditTodoChanged] = useState(false);

	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const handleUpdateTodo = (id, updatedTodo) => {
		if (updatedTodo !== currentTextTodo) {
			dispatch(action.editTodo(id, updatedTodo));
		} else {
			setValueEditTodoChanged(false);
			return;
		}

		setEdit(false);
	};

	const handleDeleteTodo = (id) => dispatch(action.deleteTodo(id));

	const handleChangeEditTodo = (newText) => {
		if (currentTextTodo !== newText && newText !== '') {
			setValueEditTodoChanged(true);
			if (newText.trim().length === 0) {
				setValueEditTodoChanged(false);
			}
		} else {
			setValueEditTodoChanged(false);
		}

		setValueEditTodo(newText);
	};

	const handleEdit = () => {
		inputRef.current.focus();

		setEdit(true);
	};

	const handleCancel = () => {
		inputRef.current.focus();

		setValueEditTodo(currentTextTodo);
		setValueEditTodoChanged(false);
		setEdit(false);
	};

	return (
		<li className={!isEdit ? styles.item : `${styles.item} ${styles.itemIsEdit}`}>
			<input type="text"
				ref={inputRef}
				value={!isEdit ? currentTextTodo : valueEditTodo}
				readOnly={!isEdit}
				className={!isEdit ? styles.field : `${styles.field} ${styles.fieldIsEdit}`}
				onChange={({target}) => handleChangeEditTodo(target.value)}
			/>
			<TodoItemTools
				id={id}
				isEdit={isEdit}
				handleEdit={handleEdit}
				handleCancel={handleCancel}
				valueEditTodo={valueEditTodo}
				handleUpdateTodo={handleUpdateTodo}
				handleDeleteTodo={handleDeleteTodo}
				valueEditTodoChanged={valueEditTodoChanged}
			/>
		</li>
	)
}
