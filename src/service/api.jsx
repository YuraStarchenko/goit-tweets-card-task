import axios from 'axios';

axios.defaults.baseURL =
  'https://6458a9f34eb3f674df79a6be.mockapi.io/api/v3/users';

export const getUsers = async () => {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const putUsers = async id => {
  try {
    const { data } = await axios.put(`/users/${id}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
