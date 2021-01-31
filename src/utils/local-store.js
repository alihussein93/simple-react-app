class LocalStore {
  getLocale() {
    return localStorage.getItem('locale');
  }

  setLocale(locale) {
    localStorage.setItem('locale', locale);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  setAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  setRefreshToken(refreshToken) {
    return localStorage.setItem('refreshToken', refreshToken);
  }

  setTokens({ accessToken, refreshToken }) {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
    return;
  }
}

export default new LocalStore();
