import { combineReducers } from 'redux';

import authReducer from './auth';
import locationReducer from './location';
import logsReducer from './logs';

const reducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  logs: logsReducer,
});

export default reducer;
