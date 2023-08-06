import { TodoList } from '../../Todos/TodoList/TodoList';
import { TodoCreate } from '../../TodoHeader/TodoCreate/TodoCreate';
import { TodoSearch } from '../../TodoHeader/TodoSearch/TodoSearch';
import { TodosSortingButton } from '../../TodosSortingButton/TodosSortingButton';
import styles from './TodoListRoot.module.css';

export const TodoListRoot = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>My To-do list</h1>
			{/* <TodoSearch /> */}
			<div className={styles.toolsWrapper}>
				<TodoCreate />
			</div>
			{/* <TodosSortingButton /> */}
			<div className={styles.divider}></div>
			<TodoList />
		</div>
	)
}
