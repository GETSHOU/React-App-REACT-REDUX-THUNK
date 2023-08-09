const todoListState = (state) => {
	// console.log(state);
	return state.dataTodoList;
};
const loadingState = (state) => state.flags.isLoading;
const valueCreateTodoState = (state) => state.flags.valueCreateTodo;
const valueSearchQueryState = (state) => state.flags.valueSearchQuery;
const errorLoadingTodoListState = (state) => state.errorLoadingTodoList;

export {
	/* flags start */
	loadingState,
	valueCreateTodoState,
	valueSearchQueryState,
	/* flags end */
	todoListState,
	errorLoadingTodoListState,
};
