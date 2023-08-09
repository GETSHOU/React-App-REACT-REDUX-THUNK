const loadingState = (state) => state.flags.isLoading;
const todoListState = (state) => state.dataTodoList;
const valueCreateTodoState = (state) => state.flags.valueCreateTodo;
const valueSearchQueryState = (state) => state.flags.valueSearchQuery;
const errorLoadingTodoListState = (state) => state.errorLoadingTodoList;

export {
	/* flags */
	loadingState,
	/* input fields */
	valueCreateTodoState,
	valueSearchQueryState,
	/* data */
	todoListState,
	/* errors */
	errorLoadingTodoListState,
};
