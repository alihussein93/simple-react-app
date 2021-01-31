import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardUI from 'pages/Dashboard';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  onMyDetailsClick = () => {};

  onAllPersonsClick = () => {};

  onDeletePersonClick = () => {};

  render() {
    const events = {
      onMyDetailsClick: this.onMyDetailsClick,
      onAllPersonsClick: this.onAllPersonsClick,
      onDeletePersonClick: this.onDeletePersonClick
    };
    return (
      <>
        <DashboardUI events={events} />
      </>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
