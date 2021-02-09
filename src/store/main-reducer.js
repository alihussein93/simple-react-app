import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import dashboardReducer from 'containers/Dashboard/reducer';
import personsReducer from 'containers/Persons/reducer';

const mainReducer = combineReducers({
  app: appReducer,
  person: dashboardReducer,
  persons: personsReducer
});

const rootReducer = (state, action) => mainReducer(state, action);
// if (action.type === actionTypes.SIGN_OUT) {
//     state = undefined;
// }
export default rootReducer;
