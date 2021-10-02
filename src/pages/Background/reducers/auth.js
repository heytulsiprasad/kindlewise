const initialState = {
  profile: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOGIN_SUCCESS':
      return { ...state, profile: payload, isAuthenticated: true };
    case 'SET_LOGOUT_SUCCESS':
      return { ...state, profile: {}, isAuthenticated: false };
    default:
      return { ...state };
  }
};

export default authReducer;
