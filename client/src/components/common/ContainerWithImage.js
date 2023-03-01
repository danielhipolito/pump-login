import React from 'react';
import PropTypes from 'prop-types';
import {PumpContainer, PumpImage} from '../styledComponents.styled';

export const ContainerWithImage = ({children, image}) => {
  const {src, alt, style} = image;
  return (
    <PumpContainer
      backgroundSize="cover"
      position="relative"
      borderBottomLeftRadius="32px"
      borderTopLeftRadius="32px"
    >
      <PumpImage
        src={src}
        alt={alt}
        className="w-100"
        style={style}
        borderRadiusMobile="32px"
        minHeightMobile="420px"
      />
      <PumpContainer
        position="absolute"
        top="0"
        left="0"
        className="d-flex h-100"
      >
        <PumpContainer className="row m-0 d-flex justify-content-center text-center">
          {children}
        </PumpContainer>
      </PumpContainer>
    </PumpContainer>
  );
};

ContainerWithImage.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object.isRequired,
};
