import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './ReactApp/components/App/App';
import { store } from './ReactApp/store';
import './css/clearFix.css';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);

// json-server --watch ./src/data/todoList.json --delay 500 --port 3004
