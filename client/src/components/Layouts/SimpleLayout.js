import React from 'react';
import PropTypes from 'prop-types';
import {PumpContainer} from '../styledComponents.styled';
import thirdBg from '../../assets/images/backgrounds/bg-3.jpg';

const bgProperties = `linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),
   url(${thirdBg}) no-repeat center`;

const SimpleLayout = ({children}) => (
  <PumpContainer
    height="100vh"
    background={bgProperties}
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

SimpleLayout.propTypes = {
  children: PropTypes.node,
};

export default SimpleLayout;
