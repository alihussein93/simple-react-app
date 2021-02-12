import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonsUI from 'pages/Persons';

import APIAdapter from 'utils/api-adapter';
import Utils from 'utils';
import Actions from './actions';

class Persons extends Component {
  componentDidMount() {
    this.load();
  }

  onBack = () => {
    const {
      history: { push }
    } = this.props;
    push('/home');
  };

  load = async () => {
    try {
      const { getAllPersons } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { status, data } = await APIAdapter.getAllPersons();
      const persons = data.map((entry) => Utils.cleanUserInfo(entry));
      getAllPersons(persons);
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
  };

  render() {
    const { persons } = this.props;
    const data = { persons };
    return <PersonsUI data={data} onBack={this.onBack} />;
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons.list
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getAllPersons: (persons) => dispatch(Actions.getAllPersons(persons))
});

Persons.propTypes = {
  push: propTypes.func.isRequired,
  persons: propTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
