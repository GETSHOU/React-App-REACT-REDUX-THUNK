import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {
	flagsReducer,
	todoListDataReducer,
	errorLoadingTodoListReducer,
} from '../js/reducers/index';

const rootReducer = combineReducers({
	flags: flagsReducer,
	dataTodoList: todoListDataReducer,
	errorLoadingTodoList: errorLoadingTodoListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
