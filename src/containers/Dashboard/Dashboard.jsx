import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardUI from 'pages/Dashboard';
import Modal from 'components/Modal';
import Header from 'components/Header';

import APIAdapter from 'utils/api-adapter';
import Utils from 'utils';
import Actions from './actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isModalVisible: false,
      modalType: ''
    };
  }

  onProfileInfoClick = () => {
    const { profile } = this.props;
    if (Utils.isEmptyObject(profile)) {
      this.getProfileInfo();
      return;
    }
    this.saveData(profile, 'profile');
  };

  onAllPersonsClick = () => {
    const {
      history: { push }
    } = this.props;
    push('/persons');
  };

  onDeletePersonClick = () => {
    this.deletePerson();
  };

  onModalClose = () => {
    this.setState((prevState) => ({
      ...prevState,
      isModalVisible: false
    }));
  };

  saveData = (data, modalType) => {
    this.setState((prevState) => ({
      ...prevState,
      data,
      modalType,
      isModalVisible: true,
      isLoading: false
    }));
  };

  async getProfileInfo() {
    try {
      const { getUserProfile } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.getProfile();
      const profile = Utils.cleanUserInfo(data[0]);
      getUserProfile(profile);
      this.saveData(profile, 'profile');
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
      const {
        deletePerson,
        profile: { id }
      } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.deletePerson(id);
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
    const { isModalVisible, data, modalType } = this.state;
    const events = {
      onProfileInfoClick: this.onProfileInfoClick,
      onAllPersonsClick: this.onAllPersonsClick,
      onDeletePersonClick: this.onDeletePersonClick
    };
    return (
      <>
        {isModalVisible && (
          <Modal onClose={this.onModalClose} type={modalType} data={data} />
        )}
        <Header isAuthenticated={true} />
        <DashboardUI events={events} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.person.profile
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getUserProfile: (profile) => dispatch(Actions.getProfile(profile)),
  deletePerson: () => dispatch(Actions.deletePerson())
});

Dashboard.propTypes = {
  personId: propTypes.string.isRequired,
  getUserProfile: propTypes.func.isRequired,
  deletePerson: propTypes.func.isRequired,
  history: propTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
