import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { reducer as translator } from 'translator';
import { reducer as beam } from 'beam';

const composeEnhancers = ((typeof(window) !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  translator,
  beam,
})

const initStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))
}

export default initStore;
