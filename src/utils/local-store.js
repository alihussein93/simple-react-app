class LocalStore {
  getLocale() {
    return localStorage.getItem('locale');
  }

  setLocale(locale) {
    localStorage.setItem('locale', locale);
  }

  getAccessToken() {
    return sessionStorage.getItem('accessToken');
  }
}

export default new LocalStore();
