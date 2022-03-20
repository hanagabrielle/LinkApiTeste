import axios from 'axios';

const mock = axios.create({
  baseURL: `https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/`,
  headers: {
    Accept: 'application/json',
  },
});

export default mock;
