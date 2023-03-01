import React, {useState} from 'react';
import {LoginForm} from '../components/forms/Login/LoginForm';
import {GetStarted} from '../components/GetStarted';
import {PumpCard} from '../components/styledComponents.styled';

const LoginPage = () => {
  const [showHelpViewMobile, setShowHelpViewMobile] = useState(false);

  return (
    <PumpCard>
      <div className="row m-0 d-flex align-items-center justify-content-center">
        <div className="col-lg-6 col-md-10 p-0 d-lg-block d-none">
          <GetStarted />
        </div>
        <div className="col-lg-6 p-0 d-lg-block d-none">
          <LoginForm />
        </div>
        <div className="col-lg-6 p-0 d-lg-none d-block">
          {showHelpViewMobile ? (
            <GetStarted />
          ) : (
            <LoginForm onForgot={() => setShowHelpViewMobile(true)} />
          )}
        </div>
      </div>
    </PumpCard>
  );
};

export default LoginPage;
