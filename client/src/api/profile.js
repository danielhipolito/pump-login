import axios from 'axios';
import {ENV, DEFAULT_ERROR} from '../utlis/constants';

const {BASE_API, API_ROUTES} = ENV;

export const getProfileFromApi = async (accessToken) => {
  let response;
  const url = `${BASE_API}/${API_ROUTES.PROFILE}`;
  const params = {headers: {Authorization: `Bearer ${accessToken}`}};
  try {
    response = await axios(url, params);
  } catch (err) {
    alert(DEFAULT_ERROR);
  }
  return response;
};

export const updateProfileFromApi = async (body, accessToken) => {
  let response;
  const url = `${BASE_API}/${API_ROUTES.PROFILE}`;
  const params = {headers: {Authorization: `Bearer ${accessToken}`}};
  try {
    response = await axios.put(url, body, params);
    window.location.reload();
  } catch (err) {
    alert(DEFAULT_ERROR);
  }
  return response;
};
