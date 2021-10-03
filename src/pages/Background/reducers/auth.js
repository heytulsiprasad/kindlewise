import * as aTypes from '../constants';

const initialState = {
  profile: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case aTypes.SET_LOGIN_SUCCESS:
      return { ...state, profile: payload, isAuthenticated: true };
    case aTypes.SET_LOGOUT_SUCCESS:
      return { ...state, profile: {}, isAuthenticated: false };
    case aTypes.SET_LOGIN_FAILURE:
      return { ...state, profile: {}, isAuthenticated: false };
    default:
      return { ...state };
  }
};

export default authReducer;
