import React from 'react';
import {UserRoutes} from './router/UserRouter';
import {WebRoutes} from './router/WebRouter';
import {useAuth} from './hooks/useAuth';
import RedirectToUrl from './components/common/RedirectoToUrl';

export const RoutesList = () => {
  const {user} = useAuth();

  return (
    <>
      {user ? <UserRoutes /> : <WebRoutes />}
      <RedirectToUrl />
    </>
  );
};
