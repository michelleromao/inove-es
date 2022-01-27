import axios from 'axios';

const api = axios.create({
  baseURL: 'https://63a6-2804-d4b-792f-6a00-9f71-c38e-2937-98e9.ngrok.io',
});

export default api;