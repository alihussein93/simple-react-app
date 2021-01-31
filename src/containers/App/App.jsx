import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'react-router';

import Routes from './routes';
import EnglishLocales from './locales/en-US.all.js';
import ArabicLocales from './locales/ar-AE.all';

import Enums from 'constants/enums';
import LocalStore from 'utils/local-store';
import APIAdapter from 'utils/api-adapter';
import Actions from './actions';
import Events from './events';

const AppActions = new Actions();

class App extends Component {
  constructor(props) {
    super(props);
    const { authStatus } = props;
    this.state = { authStatus, isLoading: false };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { locale, initApp } = this.props;
    const appLocale = LocalStore.getLocale() || locale;
    initApp(appLocale);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.authStatus !== prevState.authStatus) {
      return {
        authStatus: nextProps.authStatus
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { authStatus } = this.state;

    if (prevState.authStatus === authStatus) {
      return;
    }
    this.load();
  }

  load = async () => {
    try {
      const { unAuthenticateUser, authenticateUser } = this.props;
      const accessToken = LocalStore.getAccessToken();
      const refreshToken = LocalStore.getRefreshToken();

      if (!accessToken || !refreshToken) {
        unAuthenticateUser();
        return;
      }

      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      // const userInfo = await APIAdapter.userInfo();

      // TEMP ==================================================
      const data = {
        user: {
          id: '39888',
          firstName: 'ali',
          lastName: 'hussein',
          age: 28,
          dob: '1993-01-13',
          email: 'alii@gmail.com',
          isAdmin: false,
          isActive: true
        },
        tokens: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWxpaUBnbWFpbC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6ZmFsc2UsInBlcnNvbklkIjoiMzk4ODgiLCJkYXRlIjoiMjAyMS0wMS0zMVQxNDowNToxNy42MDRaIn0sImlhdCI6MTYxMjEwMTkxNywiZXhwIjoxNjEyMTA1NTE3fQ.B4tFOJ76wFsyWb05ovk0BgHjROcFyPEM094-AOWFpDE',
          refreshToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWxpaUBnbWFpbC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6ZmFsc2UsInBlcnNvbklkIjoiMzk4ODgiLCJkYXRlIjoiMjAyMS0wMS0zMVQxNDowNToxNy42MDZaIn0sImlhdCI6MTYxMjEwMTkxNywiZXhwIjoxNjEyMTg4MzE3fQ.DdyirfB17sqhBDc611NNf3gIDpI0KWZo3iYXXq7Gnk8'
        }
      };
      // END TEMP ==================================================

      authenticateUser({ ...data.tokens, userInfo: data.user });
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    } catch (error) {
      console.log(error);
    }
  };

  get Messages() {
    const { locale } = this.props;
    return locale === Enums.locales.ar_AE ? ArabicLocales : EnglishLocales;
  }

  render() {
    const { accessToken, locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={this.Messages}>
        <div className='container-fluid'>
          <div className='page'>
            <Routes isAuthenticated={accessToken.length > 0} />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ app: { locale, accessToken, authStatus } }) => ({
  locale,
  accessToken,
  authStatus
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  initApp: (locale) => dispatch(AppActions.initApp(locale)),
  unAuthenticateUser: () => dispatch(AppActions.unAuthenticateUser()),
  authenticateUser: (data) => dispatch(AppActions.authenticateUser(data))
});

App.propTypes = {
  locale: propTypes.string.isRequired,
  accessToken: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired,
  authenticateUser: propTypes.func.isRequired,
  unAuthenticateUser: propTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
