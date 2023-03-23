import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const deleteExpense = async (id: number | undefined) => {
  try {
    const response = await axios.delete(`${BASE_URL}/expenses/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};