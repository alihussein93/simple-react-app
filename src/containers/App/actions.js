import Events from './events';

class AppActions {
  initApp(locale) {
    return {
      type: Events.INIT_APP,
      locale
    };
  }

  authenticateUser({ userInfo, accessToken, refreshToken }) {
    return {
      type: Events.AUTHENTICATE_USER,
      userInfo,
      accessToken,
      refreshToken
    };
  }

  unAuthenticateUser() {
    return {
      type: Events.UNAUTHENTICATE_USER
    };
  }
}

export default AppActions;
