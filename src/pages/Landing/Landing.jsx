import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';

import './style.scss';

const Landing = (props) => {
  return (
    <div id='landing' className='landing'>
      <div className='container flex flex-align-center'>
        <div className='content flex flex-align-center flex-justify-space-between'>
          <div className='landing__text'>
            <div className='landing__title'>
              <FormattedMessage id='landing.title' />
            </div>
            <div className='landing__description'>
              <p className='landing__paragraph'>
                <FormattedMessage id='landing.text.p1' />
              </p>
              <p className='landing__paragraph'>
                <FormattedMessage id='landing.text.p2' />
              </p>
            </div>
            <div className='landing__button-wrapper'>
              <Button
                type='link'
                path='https://github.com/nicolaselkhoury/nk-microservices-deployment'
                extraClass='landing__button'
              >
                <FormattedMessage id='landing.view_github' />
              </Button>
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
