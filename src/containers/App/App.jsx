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
import Events from './events';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.initApp();
  }

  componentDidMount() {}

  initApp = () => {
    const { dispatch, locale } = this.props;
    const appLocale = LocalStore.getLocale() || locale;
    dispatch({
      type: Events.INIT_APP,
      locale: appLocale
    });
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

const mapStateToProps = ({ app: { locale, accessToken } }) => ({
  locale,
  accessToken
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

App.propTypes = {
  locale: propTypes.string.isRequired,
  accessToken: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
