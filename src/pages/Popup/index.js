import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';

import Popup from './Popup';
import './index.css';

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Popup />
    </Provider>,
    window.document.querySelector('#root-popup')
  );
});
