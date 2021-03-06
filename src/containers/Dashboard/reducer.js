import actionTypes from './action-types';

const initialState = {
  profile: {}
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile
        }
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default dashboardReducer;
