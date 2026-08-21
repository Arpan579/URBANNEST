import CustomerQuery from '../models/CustomerQuery.js';
import asyncHandler from '../utils/asyncHandler.js';
import { sendQueryToN8N } from '../services/n8nService.js';

// @desc    Submit a customer query
// @route   POST /api/queries
// @access  Public
export const submitQuery = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // 1. Save to DB
  const newQuery = await CustomerQuery.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  // 2. Forward to N8N
  const n8nResult = await sendQueryToN8N({
    queryId: newQuery._id,
    name,
    email,
    phone,
    subject,
    message,
    timestamp: newQuery.createdAt,
  });

  // 3. Update status based on N8N response
  if (n8nResult.success) {
    newQuery.n8nStatus = 'success';
  } else {
    newQuery.n8nStatus = 'failed';
  }
  await newQuery.save();

  res.status(201).json({
    success: true,
    message: 'Query submitted successfully',
    data: newQuery,
  });
});
