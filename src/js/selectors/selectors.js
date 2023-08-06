const todoListState = (state) => {
	console.log(state);
	return state.dataTodoList;
};
const isLoadingState = (state) => state.isLoading;
const errorLoadingTodoListState = (state) => state.errorLoadingTodoList;

export { todoListState, isLoadingState, errorLoadingTodoListState };
