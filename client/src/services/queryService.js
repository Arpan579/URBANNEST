import api from './api';

export const submitQuery = async (queryData) => {
  const response = await api.post('/queries', queryData);
  return response.data;
};
