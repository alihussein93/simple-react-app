import actionTypes from './action-types';
import AppActions from 'containers/App/actions';

class Actions extends AppActions {
  getAllPersons(persons) {
    return {
      type: actionTypes.GET_ALL_PERSONS,
      persons
    };
  }
}

export default new Actions();
