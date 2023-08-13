import { setLoading } from './modules/get-flags';
import { setValueCreateTodo, setValueSearchQuery } from './modules/get-inputs-value';

import updateTodo from './modules/update-todo';
import removeTodo from './modules/remove-todo';
import createTodo from './modules/create-todo';
import getTodoList from './modules/get-todo-list';
import searchQuery from './modules/search-query-todo';
import sortingTodos from './modules/sorting-todos';

export {
	/* flags start*/
	setLoading,
	/* input values */
	setValueCreateTodo,
	setValueSearchQuery,
	/* data */
	updateTodo,
	removeTodo,
	createTodo,
	getTodoList,
	searchQuery,
	sortingTodos,
};
