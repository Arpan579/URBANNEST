import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/urbannest',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  N8N_QUERY_WEBHOOK_URL: process.env.N8N_QUERY_WEBHOOK_URL,
  N8N_CHATBOT_WEBHOOK_URL: process.env.N8N_CHATBOT_WEBHOOK_URL,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
};
