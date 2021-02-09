import actionTypes from './action-types';

const initialState = {
  list: []
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PERSONS:
      return {
        ...state,
        list: action.persons
      };

    default:
      return state;
  }
};

export default dashboardReducer;
