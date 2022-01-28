import axios from 'axios';

const api = axios.create({
  baseURL: 'https://still-journey-35252.herokuapp.com',
});

export default api;