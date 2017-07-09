import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './store';

const store = createStore();

const Root = () => (
  <Provider store={store} >
    <App />
  </Provider>
);

export default Root;
