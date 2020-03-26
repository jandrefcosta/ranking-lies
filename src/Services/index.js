const axios = require('axios');

axios.defaults.baseURL = 'https://ranking-lies-server.herokuapp.com/';

export const registerUser = async (request) => {
  const { data, error } = await axios.post("/users", request);
  return data || error;
}
