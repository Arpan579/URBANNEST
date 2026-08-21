import express from 'express';
import { handleChatbotMessage } from '../controllers/chatbotController.js';

const router = express.Router();

router.route('/message').post(handleChatbotMessage);

export default router;
