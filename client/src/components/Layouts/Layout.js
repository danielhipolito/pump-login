import React from 'react';
import PropTypes from 'prop-types';
import {PumpContainer} from '../styledComponents.styled';
import {BRAND_COLORS} from '../../utlis/constants';

const Layout = ({children}) => {
  const {info} = BRAND_COLORS;

  return (
    <PumpContainer
      height="100vh"
      background={info}
      backgroundSize="cover"
      className="d-flex flex-column justify-content-center"
    >
      <div className="container">
        <div className="row m-0 d-flex justify-content-center">
          <div className="col-lg-10 p-0">{children}</div>
        </div>
      </div>
    </PumpContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
