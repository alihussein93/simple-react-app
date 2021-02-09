import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from 'components/Button';

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
            onClick={props.onClose}
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
    // case 'persons':
    //   return renderProfileModal(props);
    // case 'deletePerson':
    //   return renderDeleteModal(props);
    default:
      return null;
  }
};

const renderProfileModal = ({ onClose, data }) => {
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

Modal.propTypes = {
  type: propTypes.string,
  onClose: propTypes.func.isRequired,
  data: propTypes.object
};

Modal.defaultProps = {
  type: ''
};

export default injectIntl(Modal);
