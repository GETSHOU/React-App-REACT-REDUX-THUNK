import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {
	loadingReducer,
	todoListDataReducer,
	errorLoadingTodoListReducer,
} from '../js/reducers/index';

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	dataTodoList: todoListDataReducer,
	errorLoadingTodoList: errorLoadingTodoListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
