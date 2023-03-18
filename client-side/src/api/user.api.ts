import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const createUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, {email, password});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {email, password});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkIsLoggedIn = async (userId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/isLoggedIn`);
    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const logOut = async (userId: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/logout`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

