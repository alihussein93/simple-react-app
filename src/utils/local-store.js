class LocalStore {
  getLocale() {
    return localStorage.getItem('locale');
  }

  setLocale(locale) {
    localStorage.setItem('locale', locale);
  }
}

export default new LocalStore();
