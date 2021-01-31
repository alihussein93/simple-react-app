import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardUI from 'pages/Dashboard';
import Modal from 'components/Modal';

import APIAdapter from 'utils/api-adapter';
import Actions from './actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isModalVisible: false,
      modalType: '',
      data: {
        id: '39888',
        firstName: 'ali',
        lastName: 'hussein',
        age: 28,
        dob: '1993-01-13',
        email: 'alii@gmail.com',
        isAdmin: false,
        createdAt: 1612101896045,
        isActive: true
      }
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

  onModalClose = () => {
    this.setState((prevState) => ({
      ...prevState,
      isModalVisible: false
    }));
  };

  async getProfileInfo() {
    try {
      const { getUserProfile } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      // const { status, data } = await APIAdapter.getProfile();
      // getUserProfile(data[0]);
      this.setState((prevState) => ({
        ...prevState,
        modalType: 'profile',
        isModalVisible: true,
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
        <DashboardUI events={events} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.info.profile
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
