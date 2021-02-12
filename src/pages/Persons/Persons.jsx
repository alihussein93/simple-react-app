import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './style.scss';

const Persons = ({ data: { persons }, onBack }) => (
  <div className='persons'>
    <div className='container'>
      <div className='persons__header flex flex-align-center'>
        <div
          className='persons__link flex flex-align-center'
          role='presentation'
          onClick={onBack}
        >
          <div className='persons__icon'></div>
          <FormattedMessage id='app.goBack' />
        </div>
        <div className='persons__title'>
          <FormattedMessage id='app.allPersons' />
        </div>
      </div>
      <table className='table'>
        <thead className='table__head'>
          <tr>
            <th className='table__head-cell'>
              <FormattedMessage id='app.id' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.firstName' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.lastName' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.email' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.dob' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.isActive' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.createdAt' />
            </th>
            <th className='table__head-cell'>
              <FormattedMessage id='app.updatedAt' />
            </th>
          </tr>
        </thead>
        <tbody className='table__body'>
          {persons.length > 0 ? (
            persons.map(
              ({
                id,
                firstName,
                lastName,
                email,
                dob,
                isActive,
                createdAt,
                updatedAt
              }) => (
                <tr className='table__body-row'>
                  <td className='table__body-cell'>{id} </td>
                  <td className='table__body-cell'>{firstName}</td>
                  <td className='table__body-cell'>{lastName} </td>
                  <td className='table__body-cell'>{email} </td>
                  <td className='table__body-cell'>{dob} </td>
                  <td className='table__body-cell'>{isActive} </td>
                  <td className='table__body-cell'>{createdAt} </td>
                  <td className='table__body-cell'>{updatedAt} </td>
                </tr>
              )
            )
          ) : (
            <tr className='table__body-row'>Sorry, no persons found!</tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

Persons.propTypes = {
  data: propTypes.array.isRequired
};

export default Persons;
