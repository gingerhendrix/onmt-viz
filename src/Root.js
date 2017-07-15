import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RebassProvider } from 'rebass';
import App from './App';
import createStore from './store';

const store = createStore();

const Root = () => (
  <Provider store={store} >
    <RebassProvider>
      <App />
    </RebassProvider>
  </Provider>
);

export default Root;
