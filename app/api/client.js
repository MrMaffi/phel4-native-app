import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://pleh4.herokuapp.com/',
});

export default apiClient;
