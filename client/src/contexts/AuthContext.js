import React, {useState, useEffect, createContext} from 'react';
import PropTypes from 'prop-types';
import {getProfileFromApi} from '../api/profile';
import {getAccessToken, getRefreshToken} from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (token) => {
    let response;
    try {
      setToken(token);
      if (token) {
        response = await getProfileFromApi(token);
        setUser(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      if (accessToken && refreshToken) {
        await login(accessToken);
      }
      setIsLoading(false);
    })();
  }, []);

  const data = {
    accessToken: token,
    user,
    login,
  };

  if (isLoading) {
    return null;
  }
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
