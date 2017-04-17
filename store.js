import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { reducer } from 'translator';

const composeEnhancers = ((typeof(window) !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
