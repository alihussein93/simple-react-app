import axios from 'axios';

import Environment from 'constants/env';
import LocalStore from './local-store';

class Index {
  init() {
    const accessToken = LocalStore.getAccessToken();

    const headerConfig = {
      'Content-Type': 'application/json',
      Authorization: accessToken ? accessToken : ''
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

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.data;
        }
        return Promise.reject(new Error(errorMessage));
      }
    );
  }

  async login({ email, password }) {
    const { data } = await axios.post('backend/login', {
      email,
      password
    });
    return data;
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

  async refreshToken(tokens) {
    const { data } = await axios.put('/backend/token/refresh', tokens);
    return data;
  }

  async getProfile() {
    const { data } = await axios.get('backend/person');
    return data;
  }

  async getAllPersons() {
    const { data } = await axios.get('backend/persons');
    return data;
  }

  async deletePerson(id) {
    const { data } = await axios.delete(`backend/person/${id}`);
    return data;
  }
}

export default new Index();
