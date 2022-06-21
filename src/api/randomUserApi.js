import axios from 'axios';

export const getAllUsers = async () => {
  const {data} = await axios.get('https://randomuser.me/api/?results=100');
  return data.results;
};
