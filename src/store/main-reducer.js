import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import dashboardReducer from 'containers/Dashboard/reducer';

const mainReducer = combineReducers({
  app: appReducer,
  info: dashboardReducer
});

const rootReducer = (state, action) => mainReducer(state, action);
// if (action.type === actionTypes.SIGN_OUT) {
//     state = undefined;
// }
export default rootReducer;
