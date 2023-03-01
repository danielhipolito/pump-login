import React from 'react';
import PropTypes from 'prop-types';
import {BRAND_COLORS} from '../../utlis/constants';
import {PumpButton} from '../styledComponents.styled';

export const PrimaryButton = ({text, customClass}) => {
  const {primary} = BRAND_COLORS;
  return (
    <PumpButton
      backgroundColor={primary}
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
      border="0px"
      className={customClass}
      paddingMobile="0.6rem 1.5rem"
    >
      {text}
    </PumpButton>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  customClass: PropTypes.string,
};
