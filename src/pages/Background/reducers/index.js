import { combineReducers } from 'redux';

import authReducer from './auth';
import locationReducer from './location';

const reducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

export default reducer;
