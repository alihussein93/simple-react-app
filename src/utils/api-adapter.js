import axios from 'axios';

import Environment from 'constants/env';
import LocalStore from './local-store';

class Index {
  init() {
    const accessToken = LocalStore.getAccessToken();

    const headerConfig = {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : ''
    };
    axios.defaults.baseURL = `${Environment.baseURL}:${Environment.portNumber}`;
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

  async login({ email, password }) {
    const res = await axios.post('backend/login', {
      email,
      password
    });
    return res;
  }

  async signup({ firstName, lastName, email, password, dob, age, isAdmin }) {
    const res = await axios.post('/backend/person', {
      firstName,
      lastName,
      email,
      password,
      dob,
      age,
      isAdmin
    });
    return res;
  }

  async userInfo() {
    const res = await axios.get('backend/person');
    return res;
  }
}

export default new Index();
