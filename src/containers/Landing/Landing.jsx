import React, { Component } from 'react';
import propTypes from 'prop-types';

import LandingUI from 'pages/Landing';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header className='header'>header</header>
        <div className='page-body'>
          <LandingUI />
        </div>
        <footer className='footer'>footer</footer>
      </>
    );
  }
}

Landing.propTypes = {};

export default Landing;
