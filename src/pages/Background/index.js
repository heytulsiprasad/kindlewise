import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'webext-redux';
import logger from 'redux-logger';

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import reducer from './reducers';

console.log('Kindle blocks — background scripts loaded');

const initialState = {};
const middleware = [logger];

const devTools =
  process.env.NODE_ENV !== 'production' && applyMiddleware(...middleware);

const store = createStore(reducer, initialState, devTools);

store.dispatch({ type: 'DOES_NOTHING_ACTION' });

wrapStore(store);
