import React from 'react';
import ReactDOM from 'react-dom';
import './globalstyle.css'
import App from './App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
// import CartPage from './components/BlogPage.jsx';
// import HomePage from './components/HomePage.jsx';

// import { Router, Route, hashHistory } from 'react-router'
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware()));
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
