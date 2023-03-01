import React from 'react';
import {PumpModal} from './modals/PumpModal';
import {ProfileForm} from './forms/profile/ProfileForm';
import defaultPicture from '../assets/images/noPicture.png';
import {PumpText} from './styledComponents.styled';
import {BRAND_COLORS} from '../utlis/constants';
import {useAuth} from '../hooks/useAuth';

export const ProfileUpdater = () => {
  const {secondary} = BRAND_COLORS;
  const {user} = useAuth();
  const {balance} = user;

  return (
    <PumpModal>
      <div className="m-0 text-center">
        <img
          src={defaultPicture}
          alt="profile picture"
          className="my-1"
          style={{maxWidth: '150px', borderRadius: '50%'}}
        />
        <div className="mt-2 mb-5">
          <PumpText color={secondary} textAlign="center" className="mb-1">
            Available balance
          </PumpText>
          <PumpText
            color={secondary}
            fontWeight="700"
            fontSize="18px"
            textAlign="center"
            className="mb-4"
          >
            $ {balance}
          </PumpText>
        </div>
      </div>
      <ProfileForm initialData={user} />
    </PumpModal>
  );
};
