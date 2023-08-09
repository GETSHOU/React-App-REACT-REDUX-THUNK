import {
	setLoading,
	setValueCreateTodo,
	setValueChangedCreateTodo,
} from './modules/get-flags';

import createTodo from './modules/create-todo';
import getTodoList from './modules/get-todo-list';
import sortingTodos from './modules/sorting-todos';

export {
	/* flags start*/
	setLoading,
	setValueCreateTodo,
	setValueChangedCreateTodo,
	/* flags end*/
	createTodo,
	getTodoList,
	sortingTodos,
};
