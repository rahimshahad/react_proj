import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducers/rootReducer';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
// create store accepts a reducer, dev tools


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router > 
        <App />
        </Router >
    </Provider>,
    document.getElementById('root')
)