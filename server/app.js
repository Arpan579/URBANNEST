import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/env.js';

import productRoutes from './routes/productRoutes.js';
import queryRoutes from './routes/queryRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { notFound as notFoundMiddleware } from './middleware/notFoundMiddleware.js';

const app = express();

// Middleware
app.use(cors({ origin: config.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/products', productRoutes);
app.use('/api/queries', queryRoutes);
app.use('/api/chatbot', chatbotRoutes);

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (config.NODE_ENV === 'production') {
  // Serve static files from the React frontend build
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
  );
} else {
  // Root route for development
  app.get('/', (req, res) => {
    res.send('UrbanNest API is running...');
  });
}

// Error Handling Middleware
app.use(notFoundMiddleware);
app.use(errorHandler);

export default app;
