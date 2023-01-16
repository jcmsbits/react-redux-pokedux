import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { logger } from './middlewares';
import thunk from 'redux-thunk';

const composeAlt= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer= composeAlt(applyMiddleware(thunk,logger)
  );
const store = createStore(
  rootReducer,
  composedEnhancer
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

