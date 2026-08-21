import api from './api';

export const sendChatMessage = async (messageData) => {
  const response = await api.post('/chatbot/message', messageData);
  return response.data;
};
