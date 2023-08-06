import TodosProvider from '../../../hooks/useTodos';
import { TodoAdd } from '../../TodoHeader/TodoAdd/TodoAdd';
import { TodoList } from '../../Todos/TodoList/TodoList';
import { TodoSearch } from '../../TodoHeader/TodoSearch/TodoSearch';
import { TodoListTools } from '../../TodoTools/TodoListTools/TodoListTools';
import { TodosSortingButton } from '../../TodosSortingButton/TodosSortingButton';
import styles from './TodoListRoot.module.css';

export const TodoListRoot = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>My Todo-s</h1>
			<TodosProvider>
				<TodoSearch />
				<div className={styles.toolsWrapper}>
					<TodoAdd />
					<TodoListTools />
				</div>
				<TodosSortingButton />
				<div className={styles.divider}></div>
				<TodoList />
			</TodosProvider>
		</div>
	)
}
