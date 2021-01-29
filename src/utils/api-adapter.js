import axios from 'axios';

import Environment from 'constants/environment';
import Enums from 'constants/enums';
import LocalStore from './local-store';

class Index {
  init() {
    const accessToken = LocalStore.getAccessToken();
    const locale = LocalStore.getLocale();

    const headerConfig = {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
      'X-Locale': locale === Enums.locales.ar_AE ? 'ar_AE' : 'en_US'
    };
    axios.defaults.baseURL = Environment.endPoint;
    axios.defaults.headers.common = { ...headerConfig };

    axios.interceptors.request.use(
      (request) => request,
      (error) => {
        let errorStatus = 0;
        if (error.response) {
          errorStatus = error.response.status;
        }
        return Promise.reject(new Error(errorStatus));
      }
    );
  }

  async login({ email, password, isRemember }) {
    const { data } = await axios.post('/auth/login', {
      email,
      password,
      isRemember
    });
  }

  async signup({ firstName, lastName, email, password, dob, age, isAdmin }) {
    const { status } = await axios.post('/auth/signup', {
      firstName,
      lastName,
      email,
      password,
      dob,
      age,
      isAdmin
    });
    return status;
  }
}

export default new Index();
