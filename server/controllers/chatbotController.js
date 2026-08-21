import asyncHandler from '../utils/asyncHandler.js';
import { sendChatbotMessageToGroq } from '../services/chatbotService.js';

// @desc    Send message to chatbot
// @route   POST /api/chatbot/message
// @access  Public
export const handleChatbotMessage = asyncHandler(async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message) {
    res.status(400);
    throw new Error('Message is required');
  }

  const groqResponse = await sendChatbotMessageToGroq({ message, sessionId });

  res.json({
    success: true,
    message: 'Message processed',
    data: groqResponse,
  });
});
