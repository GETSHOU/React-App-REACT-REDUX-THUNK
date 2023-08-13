import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import * as action from '../../../store/actions/index';
import { TodoItemTools } from '../../TodoTools/TodoItemTools/TodoItemTools';
import styles from './TodoItem.module.css';

export const TodoItem = ({id, currentTextTodo}) => {
	const [isEdit, setEdit] = useState(false);
	const [valueEditTodo, setValueEditTodo] = useState(currentTextTodo);
	const [valueEditTodoChanged, setValueEditTodoChanged] = useState(false);

	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const handleUpdateTodo = (id, updatedTodo) => {
		dispatch(action.editTodo(id, updatedTodo));
		setValueEditTodoChanged(false);
		setEdit(false);
	};

	const handleRemoveTodo = (id) => dispatch(action.removeTodo(id));

	const handleChangeEditTodo = (newText) => {
		const trimmedNewText = newText.trim();

		if (currentTextTodo !== trimmedNewText && trimmedNewText !== '') {
			setValueEditTodoChanged(true);

			if (trimmedNewText.length === 0) {
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
				handleRemoveTodo={handleRemoveTodo}
				valueEditTodoChanged={valueEditTodoChanged}
			/>
		</li>
	)
}
