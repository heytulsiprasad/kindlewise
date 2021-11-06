import { createStore, applyMiddleware, compose } from 'redux';
import { wrapStore } from 'webext-redux';
import { createLogger } from 'redux-logger';

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import reducer from './reducers/index';

console.log('Kindle blocks — background scripts loaded');

const logger = createLogger({
  collapsed: true,
});

const middleware = [logger];

const devTools =
  process.env.NODE_ENV !== 'production' &&
  compose(applyMiddleware(...middleware));

const store = createStore(reducer, {}, devTools);

wrapStore(store);
