import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import history from './history';
import APIAdapter from 'utils/api-adapter';

import './styles/_main.scss';

APIAdapter.init();
const ROOT_NODE = document.getElementById('root');
const APP_NODE = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(APP_NODE, ROOT_NODE);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
