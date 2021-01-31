import actionTypes from './action-types';
import AppActions from 'containers/App/actions';

class Actions extends AppActions {
  getProfile(profile) {
    return {
      type: actionTypes.GET_USER_PROFILE,
      profile
    };
  }

  getAllPersons(persons) {
    return {
      type: actionTypes.GET_ALL_PERSONS,
      persons
    };
  }

  deletePerson() {
    return {
      type: actionTypes.GET_ALL_PERSONS
    };
  }
}

export default new Actions();
