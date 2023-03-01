import React from 'react';
import PropTypes from 'prop-types';
import {BRAND_COLORS} from '../../utlis/constants';
import {PumpButton} from '../styledComponents.styled';

export const SecondaryButton = ({text, customClass}) => {
  const {info, light} = BRAND_COLORS;
  return (
    <PumpButton
      backgroundColor={info}
      border={`1px solid ${light}`}
      paddingMobile="0.6rem 1.5rem"
    >
      {text}
    </PumpButton>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string,
  customClass: PropTypes.string,
};
