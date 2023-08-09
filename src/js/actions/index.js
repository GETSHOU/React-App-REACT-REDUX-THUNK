import { setLoading, setValueCreateTodo, setValueSearchQuery } from './modules/get-flags';

import createTodo from './modules/create-todo';
import getTodoList from './modules/get-todo-list';
import searchQuery from './modules/search-query-todo';
import sortingTodos from './modules/sorting-todos';
export {
	/* flags start*/
	setLoading,
	setValueCreateTodo,
	setValueSearchQuery,
	/* flags end*/
	createTodo,
	getTodoList,
	searchQuery,
	sortingTodos,
};
