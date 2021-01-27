import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import appReducer from './main-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
