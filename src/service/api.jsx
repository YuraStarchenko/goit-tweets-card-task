import axios from 'axios';

axios.defaults.baseURL = 'https://6458a9f34eb3f674df79a6be.mockapi.io/api/v3/';

export const getUsers = async ({ page, limit }) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (userId, credentials) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, credentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};