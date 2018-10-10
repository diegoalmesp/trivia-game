import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import config from './config'
import Root from './components/Root';
import appReducer from './reducers'

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

let middleWares = [thunkMiddleware]

if(config.ENVIRONMENT === 'develop') middleWares = [...middleWares, createLogger()]

const store = createStore(appReducer, applyMiddleware(...middleWares));

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
