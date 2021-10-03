import * as aTypes from '../constants';

const initialState = {
  active: 'Auth',
};

const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case aTypes.SET_LOGIN_SUCCESS:
      return { ...state, active: 'Overview' };
    case aTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        active: payload,
      };
    case aTypes.SET_LOGOUT_SUCCESS:
    case aTypes.SET_LOGIN_FAILURE:
      return { ...state, active: 'Auth' };
    default:
      return { ...state };
  }
};

export default locationReducer;
