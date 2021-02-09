import actionTypes from './action-types';

const initialState = {
  profile: {},
  persons: []
};

const dashboardReducer = (state = initialState, action) => {
  console.log('action.type ', action.type);

  switch (action.type) {
    case actionTypes.GET_USER_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile
        }
      };
    case actionTypes.GET_ALL_PERSONS:
      return {
        ...state,
        persons: action.persons
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
