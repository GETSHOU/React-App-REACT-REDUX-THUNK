const todoListState = (state) => {
	// console.log(state);
	return state.dataTodoList;
};
const loadingState = (state) => state.flags.isLoading;
const valueCreateTodoState = (state) => state.flags.valueCreateTodo;
const errorLoadingTodoListState = (state) => state.errorLoadingTodoList;

export { todoListState, loadingState, valueCreateTodoState, errorLoadingTodoListState };
