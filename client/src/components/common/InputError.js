import React from 'react';
import PropTypes from 'prop-types';
import {PumpText} from '../styledComponents.styled';

export const InputError = ({error}) =>
  error ? <PumpText className="text-danger">{error}</PumpText> : null;

InputError.propTypes = {
  error: PropTypes.string,
};
