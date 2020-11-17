import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),
  document.getElementById('root')
);
reportWebVitals();
