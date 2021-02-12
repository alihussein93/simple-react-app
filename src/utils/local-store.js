class LocalStore {
  getLocale() {
    return sessionStorage.getItem('locale');
  }

  setLocale(locale) {
    sessionStorage.setItem('locale', locale);
  }

  getAccessToken() {
    return sessionStorage.getItem('accessToken');
  }

  setAccessToken(accessToken) {
    return sessionStorage.setItem('accessToken', accessToken);
  }

  getRefreshToken() {
    return sessionStorage.getItem('refreshToken');
  }

  setRefreshToken(refreshToken) {
    return sessionStorage.setItem('refreshToken', refreshToken);
  }

  setTokens({ accessToken, refreshToken }) {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
    return;
  }

  setTokenExpiration(tokenExpiration) {
    return sessionStorage.setItem('tokenExpiration', tokenExpiration);
  }

  getTokenExpiration() {
    return sessionStorage.getItem('tokenExpiration');
  }
}

export default new LocalStore();
