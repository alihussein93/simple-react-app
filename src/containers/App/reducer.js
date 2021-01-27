import Enums from 'constants/enums';
import Events from './events';

const initialState = {
  accessToken: '',
  accessTokenExpirationDate: '',
  locale: Enums.locales.en_US
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case Events.initApp:
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
};

export default appReducer;
