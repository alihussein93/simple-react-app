import actionTypes from './action-types';
import AppActions from 'containers/App/actions';

class Actions extends AppActions {
  getProfile(profile) {
    return {
      type: actionTypes.GET_USER_PROFILE,
      profile
    };
  }

  deletePerson() {
    return {
      type: actionTypes.DELETE_PERSON
    };
  }
}

export default new Actions();
