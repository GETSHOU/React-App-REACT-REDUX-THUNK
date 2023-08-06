import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './ReactApp/components/App/App';
import './css/clearFix.css';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// json-server --watch ./src/data/todoList.json --delay 500 --port 3004
