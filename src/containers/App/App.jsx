import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'react-router';

import Routes from './routes';

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
      type: Events.initApp,
      appLocale
    });
  };

  render() {
    const { accessToken } = this.props;
    return (
      <div className='container-fluid'>
        <div className='page'>
          <Routes isAuthenticated={accessToken.length > 0} />
        </div>
      </div>
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
