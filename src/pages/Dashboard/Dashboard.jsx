import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './style.scss';

const Dashboard = ({
  events: { onProfileInfoClick, onAllPersonsClick, onDeletePersonClick }
}) => (
  <div className='dashboard main-bg'>
    <div className='container'>
      <div className='dashboard__actions flex flex-column flex-align-center flex-justify-center'>
        <div
          className='dashboard__action dashboard__action--my-details flex  flex-align-center flex-justify-center'
          onClick={onProfileInfoClick}
          role='presentation'
        >
          <FormattedMessage id='dashboard.action.myProfile' />
        </div>
        <div
          className='dashboard__action dashboard__action--my-details flex  flex-align-center flex-justify-center'
          onClick={onAllPersonsClick}
          role='presentation'
        >
          <FormattedMessage id='dashboard.action.allPersons' />
        </div>
        <div
          className='dashboard__action dashboard__action--my-details flex  flex-align-center flex-justify-center'
          onClick={onDeletePersonClick}
          role='presentation'
        >
          <FormattedMessage id='dashboard.action.deletePerson' />
        </div>
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {};

export default Dashboard;
