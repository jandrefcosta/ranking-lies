const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3033/';


axios.interceptors.request.use(function (config) {
  console.log("request")
  const token = localStorage.getItem('user_id');
  config.headers.Authorization = token;
  console.log(config)
  return config;
})

export const registerUser = async (request) => {
  const { data, error } = await axios.post("/users", request);
  return data || error;
}

export const login = async (request) => {
  const { data, error } = await axios.post("/sessions", request);
  return data || error;
}

export const registerLies = async (request) => {
  const { data, error } = await axios.post("/lies", request);
  return data || error;
}

export const deleteLies = async (id) => {
  const { data, error } = await axios.delete(`/lies/${id}`);
  return data || error;
}

export const listLies = async (request) => {
  const { data, error } = await axios.get("/lies", request);
  return data || error;
}