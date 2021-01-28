import React, { Component } from 'react';
import propTypes from 'prop-types';

import LandingUI from 'pages/Landing';
import Header from 'components/Header';
import Footer from 'components/Footer';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className='page-body'>
          <LandingUI />
        </div>
        <Footer />
      </>
    );
  }
}

Landing.propTypes = {};

export default Landing;
