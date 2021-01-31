import Enums from 'constants/enums';
import Events from './events';

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
        refreshToken: action.refreshToken,
        profile: {
          ...state.profile,
          ...action.userInfo
        }
      };
    case Events.UAUTHENTICATE_USER:
      return {
        ...state,
        authStatus: Enums.authStatuses.UNAUTHENTICATED,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        profile: {
          ...state.profile,
          ...action.userInfo
        }
      };
    default:
      return state;
  }
};

export default appReducer;
