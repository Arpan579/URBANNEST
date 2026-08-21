import express from 'express';
import { submitQuery } from '../controllers/queryController.js';

const router = express.Router();

router.route('/').post(submitQuery);

export default router;
