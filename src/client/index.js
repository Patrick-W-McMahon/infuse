import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// import "./app.css";
import App from './App';
import configureStore from './configureStore'

const store = configureStore({ setEnhancers: false, isLogging: false });
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));