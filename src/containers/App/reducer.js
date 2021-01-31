import Enums from 'constants/enums';
import Events from './action-types';

const initialState = {
  authStatus: Enums.authStatuses.NONE,
  accessToken: '',
  accessTokenExpirationDate: '',
  locale: Enums.locales.en_US,
  profile: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case Events.INIT_APP:
      return {
        ...state,
        locale: action.locale,
        authStatus: Enums.authStatuses.LOADED
      };
    case Events.AUTHENTICATE_USER:
      return {
        ...state,
        authStatus: Enums.authStatuses.AUTHENTICATED,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };
    case Events.UAUTHENTICATE_USER:
      return {
        ...state,
        authStatus: Enums.authStatuses.UNAUTHENTICATED
      };
    default:
      return state;
  }
};

export default appReducer;
