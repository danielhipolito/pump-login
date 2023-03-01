const SERVER_IP = 'localhost:3000';

export const ENV = {
  BASE_API: `http://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    LOGIN: 'login',
    PROFILE: 'profile',
  },
  JWT: {ACCESS: 'access', REFRESH: 'refresh'},
};

export const BRAND_COLORS = {
  primary: '#267DFF',
  secondary: '#333333',
  light: 'white',
  info: '#2A94F2',
};

export const DEFAULT_ERROR =
  'An error has ocurred. Contact the Technical Support team';
