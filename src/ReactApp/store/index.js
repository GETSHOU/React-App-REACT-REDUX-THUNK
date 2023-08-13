import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { flagsReducer, inputsValueReducer, todoListDataReducer } from './reducers/index';

const rootReducer = combineReducers({
	flags: flagsReducer,
	inputsValue: inputsValueReducer,
	dataTodoList: todoListDataReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
