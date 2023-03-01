import React from 'react';
import PropTypes from 'prop-types';
import {ModalBox} from '../styledComponents.styled';

export const PumpModal = ({children}) => (
  <ModalBox
    width="40%"
    width992="100%"
    width1200="100%"
    marginMobile="0"
    widthMobile="100%"
    className="p-3 pump-modal-box"
    borderRadius="32px"
    border="3px solid #1D8DFC"
    style={{
      position: 'absolute',
      bottom: '0',
      height: '95vh',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    }}
  >
    {children}
  </ModalBox>
);

PumpModal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
};
