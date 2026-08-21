import Groq from 'groq-sdk';
import { config } from '../config/env.js';

let groq;
if (config.GROQ_API_KEY) {
  groq = new Groq({ apiKey: config.GROQ_API_KEY });
}

export const sendChatbotMessageToGroq = async ({ message, sessionId }) => {
  if (!config.GROQ_API_KEY) {
    console.warn('GROQ_API_KEY is not configured.');
    return { response: "I'm currently offline as my AI brain is not connected. Please add a GROQ_API_KEY in the backend .env file!" };
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful, friendly, and knowledgeable assistant for the "UrbanNest Lifestyle Store".
          UrbanNest sells premium home décor, everyday essentials, accessories, candles, lamps, mugs, and storage products.
          Keep your answers concise, warm, and helpful. Always try to assist the customer with their lifestyle needs.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      model: 'qwen/qwen3.6-27b',
      temperature: 0.7,
      max_tokens: 512,
    });

    let botResponse = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
    
    // Remove <think> blocks if the model outputs them
    botResponse = botResponse.replace(/<think>[\s\S]*?<\/think>\n*/g, '').trim();
    
    return { response: botResponse };
  } catch (error) {
    console.error('Error getting response from Groq:', error.message);
    return { response: "Sorry, I'm having trouble connecting to my AI brain right now. Please try again later." };
  }
};
