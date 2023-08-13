const loadingState = (state) => state.flags.isLoading;
const todoListState = (state) => state.dataTodoList;
const valueCreateTodoState = (state) => state.inputsValue.valueCreateTodo;
const valueSearchQueryState = (state) => state.inputsValue.valueSearchQuery;

export {
	/* flags */
	loadingState,
	/* input fields */
	valueCreateTodoState,
	valueSearchQueryState,
	/* data */
	todoListState,
};
