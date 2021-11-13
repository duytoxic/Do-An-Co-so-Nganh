import axios from 'axios';

const BASE_URL = 'https://60bf76bc97295a0017c42f14.mockapi.io/';

export default axios.create({
  baseURL: BASE_URL,
});
