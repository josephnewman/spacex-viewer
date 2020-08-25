import axios from 'axios';
import { config } from '../constants';

const instance = axios.create({
  baseURL: config.API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
