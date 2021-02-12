import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from 'components/Button';
import Input from 'components/Input';

import './style.scss';

const Modal = (props) => {
  return (
    <div className='modal flex flex-justify-center flex-align-center'>
      <div className='modal__box'>
        {' '}
        <div className='modal__header flex flex-align-center'>
          <div
            className='modal__icon modal__icon--close'
            role='presentation'
            onClick={props.events.onClose}
          ></div>
        </div>
        {renderModal(props)}
      </div>
    </div>
  );
};

const renderModal = (props) => {
  switch (props.type) {
    case 'profile':
      return renderProfileModal(props);
    case 'delete':
      return renderDeleteModal(props);
    default:
      return null;
  }
};

const renderProfileModal = ({ events: { onClose }, data }) => {
  return (
    <>
      <div className='modal__body'>
        <div className='modal__title'>
          <FormattedMessage id='modal.profile' />
        </div>
        {Object.keys(data).map((key) => {
          if (key !== 'isAdmin') {
            return (
              <div className='row flex flex-align-center flex-justify-space-between'>
                <div className='modal__cell modal__cell--name'>
                  <FormattedMessage id={`app.${key}`} />
                </div>
                <div className='modal__cell modal__cell--value'>
                  {data[key]}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className='modal__footer flex flex-justify-center'>
        <Button style='inverted' onClick={onClose}>
          <FormattedMessage id='app.done' />
        </Button>
      </div>
    </>
  );
};

const renderDeleteModal = ({
  userId,
  error,
  events: { onDeletePerson, onInputChange },
  intl: { formatMessage }
}) => {
  return (
    <>
      <div className='modal__body'>
        <div className='modal__title'>
          <FormattedMessage id='modal.deleteUser' />
        </div>
        <Input
          placeholder={formatMessage({ id: 'modal.userId' })}
          value={userId}
          onChange={onInputChange}
        />
      </div>
      <div className='modal__footer flex flex-column flex-justify-center flex-justify-center'>
        <Button style='inverted' onClick={onDeletePerson}>
          <FormattedMessage id='app.delete' />
        </Button>
        <div className='modal__error'>{error}</div>
      </div>
    </>
  );
};

Modal.propTypes = {
  type: propTypes.string,
  events: propTypes.object.isRequired,
  data: propTypes.object,
  userId: propTypes.string
};

Modal.defaultProps = {
  type: '',
  userId: '',
  data: {}
};

export default injectIntl(Modal);
