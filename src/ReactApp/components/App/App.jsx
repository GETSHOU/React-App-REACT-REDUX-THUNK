import { TodoListRoot } from '../Todos/TodoListRoot/TodoListRoot';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<TodoListRoot />
		</div>
	);
};
