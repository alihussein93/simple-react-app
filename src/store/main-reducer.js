import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';

const mainReducer = combineReducers({
  app: appReducer
});

const rootReducer = (state, action) => mainReducer(state, action);
// if (action.type === actionTypes.SIGN_OUT) {
//     state = undefined;
// }
export default rootReducer;
