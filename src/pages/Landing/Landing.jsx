import React from 'react';
import propTypes from 'prop-types';

import Button from 'components/Button';

import './style.scss';

const Landing = (props) => {
  return (
    <div id='landing' className='landing'>
      <div className='container flex flex-align-center'>
        <div className='content flex flex-align-center'>
          <div className='landing__text'>
            <div className='landing__title'>NK Microservices Project</div>
            <div className='landing__description'>
              <p className='landing__paragraph'>
                The NK Microservices project serves as a pilot project and/or a
                reference to be used by anyone who wishes to write software
                using the Microservices approach. Indeed, Microservices is a
                software development methodology that is being adopted widely
                nowadays, especially with the advancement of the technology, and
                the adoption of cloud computing resources.
              </p>
              <p className='landing__paragraph'>
                This project is basic, open source, and welcomes everyone who
                wishes to contribute to it, by enhancing it, adding new
                features, and suggesting recommendations.
              </p>
            </div>{' '}
            <div className='landing__button-wrapper'>
              <Button>View on Github</Button>
            </div>
          </div>
          <div className='landing__image-wrapper'>
            <div className='landing__image'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
