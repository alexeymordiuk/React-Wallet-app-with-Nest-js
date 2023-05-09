import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const deleteExpense = async (id: number | undefined) => {
  try {
    const response = await axios.delete(`${BASE_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccountBalance = async (userId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/balance`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAccountBalance = async (userId: string, amount: number) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/${userId}/balance`, { amount, userId,}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
