import actionTypes from './action-types';

class AppActions {
  initApp(locale) {
    return {
      type: actionTypes.INIT_APP,
      locale
    };
  }

  authenticateUser({ accessToken, refreshToken }) {
    return {
      type: actionTypes.AUTHENTICATE_USER,
      accessToken,
      refreshToken
    };
  }

  unAuthenticateUser() {
    return {
      type: actionTypes.UNAUTHENTICATE_USER
    };
  }
}

export default AppActions;
