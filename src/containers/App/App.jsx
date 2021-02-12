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
import Dates from 'utils/dates';

import Environment from 'constants/env';
import Actions from './actions';
import history from '../../history';

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
      const {
        unAuthenticateUser,
        authenticateUser,
        history: { push }
      } = this.props;
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

      authenticateUser({ accessToken, refreshToken });
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
      // push(history.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  refreshToken = async () => {
    try {
      const { authenticateUser } = this.props;
      const currentAccessToken = LocalStore.getAccessToken();
      const currentRefreshToken = LocalStore.getRefreshToken();
      const {
        data: { accessToken, refreshToken }
      } = await APIAdapter.refreshToken({
        accessToken: currentAccessToken,
        refreshToken: currentRefreshToken
      });
      APIAdapter.init();
      LocalStore.setTokens({ accessToken, refreshToken });
      LocalStore.setTokenExpiration(Dates.getTimeAfterOneHour());
      authenticateUser({ accessToken, refreshToken });
    } catch (error) {
      console.log(error);
    }
  };

  // 1613072162
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
            <Routes
              refreshToken={this.refreshToken}
              isAuthenticated={accessToken.length > 0}
            />
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
