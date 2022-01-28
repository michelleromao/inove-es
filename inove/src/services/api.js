import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9e29-2804-d4b-792f-6a00-c5d4-4fab-d3b-f6d0.ngrok.io',
});

export default api;