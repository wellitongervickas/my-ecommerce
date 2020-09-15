import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// client.interceptors.response.use(({ data }) => data)

export default client;
