import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const composeEnhancers = typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
registerServiceWorker();
