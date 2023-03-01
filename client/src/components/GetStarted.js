import React from 'react';
import {
  PumpContainer,
  PumpDivider,
  PumpText,
} from './styledComponents.styled';
import firstBg from '../assets/images/backgrounds/bg-1.png';
import {ContainerWithImage} from './common/ContainerWithImage';
import {SecondaryButton} from './Buttons/SecondaryButton';

export const GetStarted = () => {
  const bgProperties = {
    src: firstBg,
    alt: 'login blue background',
    style: {
      borderTopLeftRadius: '24px',
      borderBottomLeftRadius: '24px',
      borderLeft: '1px solid gray',
    },
  };

  return (
    <ContainerWithImage image={bgProperties}>
      <div
        className="col-lg-7 h-100 d-flex align-itmes-center flex-column justify-content-center"
        style={{color: 'white'}}
      >
        <PumpContainer>
          <PumpText fontSize="40px" fontWeight="700">
            Welcome!
          </PumpText>
          <PumpDivider width="20%" />
          <PumpText className="my-5">
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum
          </PumpText>
        </PumpContainer>
        <div className="row m-0">
          <div className="col-lg-9 p-0">
            <SecondaryButton text="Reset password" />
          </div>
        </div>
      </div>
    </ContainerWithImage>
  );
};
