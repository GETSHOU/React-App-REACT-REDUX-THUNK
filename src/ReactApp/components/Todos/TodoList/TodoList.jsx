import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as selector from '../../../../js/selectors/index';
import * as action from '../../../../js/actions/index';
import { Loader } from "../../Loader/Loader";
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = () => {
	const loading = useSelector(selector.loadingState);
	const todoList = useSelector(selector.todoListState);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(action.getTodoList());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{ loading
					? <Loader />
					: <>
							{todoList.map((todo) => {
								return (
									<TodoItem
										key={todo.id}
										id={todo.id}
										currentText={todo.text}
									/>
								)}
							)}
						</>
				}
			</ul>
		</div>
	)
}
