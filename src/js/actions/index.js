import {
	setLoading,
	setValueEditTodo,
	setValueCreateTodo,
	setValueSearchQuery,
} from './modules/get-flags';

import editTodo from './modules/edit-todo';
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
	editTodo,
	createTodo,
	getTodoList,
	searchQuery,
	sortingTodos,
};
