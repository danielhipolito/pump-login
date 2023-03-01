import axios from 'axios';
import {ENV, DEFAULT_ERROR} from '../utlis/constants';

const {BASE_API, API_ROUTES, JWT} = ENV;
const {ACCESS, REFRESH} = JWT;

export const loginApi = async (body) => {
  let response;
  const url = `${BASE_API}/${API_ROUTES.LOGIN}`;
  try {
    response = await axios.post(url, body);
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data);
    } else {
      alert(DEFAULT_ERROR);
    }
  }
  return response;
};

export const setAccessToken = (token) => localStorage.setItem(ACCESS, token);

export const getAccessToken = () => localStorage.getItem(ACCESS);

export const setRefreshToken = (token) => localStorage.setItem(REFRESH, token);

export const getRefreshToken = () => localStorage.getItem(REFRESH);

export const removeTokens = () => {
  localStorage.removeItem(ACCESS);
  localStorage.removeItem(REFRESH);
};
