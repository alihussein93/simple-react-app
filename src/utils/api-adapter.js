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
      (response) => response.data,
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

  async getProfile() {
    const res = await axios.get('backend/person');
    return res;
  }

  async getAllPersons() {
    const res = await axios.get('backend/persons');
    return res;
  }

  async deletePerson(id) {
    const res = await axios.delete(`backend/person/${id}`);
    return res;
  }
}

export default new Index();
