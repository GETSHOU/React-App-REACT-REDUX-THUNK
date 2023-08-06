import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as action from '../../../../js/actions/index';
import { TodoListTools } from '../../TodoTools/TodoListTools/TodoListTools';
import styles from './TodoCreate.module.css';

export const TodoCreate = () => {
	const [fieldValue, setFieldValue] = useState('');
	const [fieldValueoChanged, setFieldValueChanged] = useState(false);
	const dispatch = useDispatch();

	const handleCreateTodo = (text) => {
    dispatch(action.createTodo(text));
    setFieldValue('');
		setFieldValueChanged(false);
  }

	const handleChangeCreateTodo = ({target}) => {
		if (fieldValue !== target.value && target.value !== '') {
			setFieldValueChanged(true);
		} else {
			setFieldValueChanged(false);
		}

		setFieldValue(target.value);
	};

	return (
		<>
			<input
				type="text"
				className={`${styles.field}`}
				value={fieldValue}
				onChange={handleChangeCreateTodo}
			/>
			<TodoListTools handleCreateTodo={handleCreateTodo} fieldValue={fieldValue} fieldValueoChanged={fieldValueoChanged}/>
		</>
	)
}
