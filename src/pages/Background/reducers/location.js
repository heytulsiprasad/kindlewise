const initialState = {
  active: 'Auth',
};

const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOGIN_SUCCESS':
      return { ...state, active: 'Overview' };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        active: payload,
      };
    case 'SET_LOGOUT_SUCCESS':
      return { ...state, active: 'Auth' };
    default:
      return { ...state };
  }
};

export default locationReducer;
