import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://www.mocky.io/v2'
});

export default axios;
