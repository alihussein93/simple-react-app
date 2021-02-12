import React, { Component } from 'react';

import LocalStore from 'utils/local-store';
import Dates from 'utils/dates';

class Observer extends Component {
  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
    if (this.tokenInterval) {
      clearInterval(this.tokenInterval);
    }
  }

  async load() {
    this.startTokenMonitoring();
    this.setState((prevState) => ({
      ...prevState,
      tokenExpiration: LocalStore.getTokenExpiration()
    }));
  }

  startTokenMonitoring() {
    this.tokenInterval = setInterval(() => {
      const tokenExpiration = LocalStore.getTokenExpiration();
      if (Dates.currentTime() > parseInt(tokenExpiration, 10)) {
        this.props.refreshToken();
      }
    }, 1000);
  }

  render() {
    return null;
  }
}

export default Observer;
