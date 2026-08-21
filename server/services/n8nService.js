import axios from 'axios';
import { config } from '../config/env.js';

export const sendQueryToN8N = async (queryData) => {
  if (!config.N8N_QUERY_WEBHOOK_URL) {
    console.warn('N8N_QUERY_WEBHOOK_URL is not configured.');
    return { success: false, reason: 'URL not configured' };
  }

  try {
    const response = await axios.post(config.N8N_QUERY_WEBHOOK_URL, queryData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error sending query to N8N:', error.message);
    return { success: false, reason: error.message };
  }
};
