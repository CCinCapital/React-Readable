import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import thunk from 'redux-thunk';
import reducer from './reducers'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'


const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
