import { createStore } from 'redux';
import { wrapStore } from 'webext-redux';

import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import reducer from './reducers';

console.log('Kindle blocks — background scripts loaded');

const initialState = {};
const store = createStore(reducer, initialState);

wrapStore(store);
