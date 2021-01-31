import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardUI from 'pages/Dashboard';

import APIAdapter from 'utils/api-adapter';
import Actions from './actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  onProfileInfoClick = () => {
    this.getProfileInfo();
  };

  onAllPersonsClick = () => {
    this.getAllPersonsClick();
  };

  onDeletePersonClick = () => {
    this.deletePerson();
  };

  async getProfileInfo() {
    try {
      const { getUserProfile } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.getProfile();
      getUserProfile(data[0]);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    } catch (error) {
      console.log(error);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  }

  async getAllPersonsClick() {
    try {
      const { getAllPersons } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.getAllPersons();
      getAllPersons(data);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    } catch (error) {
      console.log(error);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  }

  async deletePerson() {
    try {
      const { deletePerson, personId } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.deletePerson(personId);
      deletePerson();
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    } catch (error) {
      console.log(error);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  }

  render() {
    const events = {
      onProfileInfoClick: this.onProfileInfoClick,
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

const mapStateToProps = (state) => ({
  personId: state.info.profile.id
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getUserProfile: (profile) => Actions.getProfile(profile),
  getAllPersons: () => Actions.getAllPersons(),
  deletePerson: () => Actions.deletePerson()
});

Dashboard.propTypes = {
  personId: propTypes.string.isRequired,
  getUserProfile: propTypes.func.isRequired,
  getAllPersons: propTypes.func.isRequired,
  deletePerson: propTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
