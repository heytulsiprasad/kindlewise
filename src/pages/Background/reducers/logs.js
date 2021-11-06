import * as aTypes from '../constants';

const initialState = {
  listOfLogs: [],
};

const logsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case aTypes.ADD_NEW_LOG:
      return { ...state, listOfLogs: [...state.listOfLogs, ...payload] };
    default:
      return { ...state };
  }
};

export default logsReducer;
