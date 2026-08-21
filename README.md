# UrbanNest Lifestyle Store

**“Little Things. Beautiful Living.”**

UrbanNest is a modern lifestyle store built with the MERN stack (MongoDB, Express, React, Node.js), featuring a premium UI, product catalog, customer query system, and an integrated AI Chatbot powered by N8N.

## Features
- **MERN Stack**: Full-stack application.
- **Dynamic Product Catalog**: Manage products via MongoDB.
- **N8N Integrations**: Customer queries and AI Chatbot integrated with N8N webhooks.
- **Premium UI**: Custom responsive CSS for a modern, lifestyle brand aesthetic.

## Technologies
- **Frontend**: React.js, Vite, React Router DOM, Axios, React Icons, Vanilla CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Axios, CORS
- **Integrations**: N8N Webhooks

## Folder Structure
- `/client`: React Frontend
- `/server`: Express Backend

## Installation & Setup

### 1. Backend Setup
```bash
cd server
npm install
```
Configure environment variables in `server/.env` based on `server/.env.example`.
Run the development server:
```bash
npm run dev
```

### 2. Database Seeding (Optional)
```bash
cd server
npm run seed
```

### 3. Frontend Setup
```bash
cd client
npm install
```
Configure environment variables in `client/.env` based on `client/.env.example`.
Run the development server:
```bash
npm run dev
```

## API Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a product
- `POST /api/queries` - Submit a customer query (saved to DB and sent to N8N)
- `POST /api/chatbot/message` - Send message to N8N AI Chatbot webhook

## Deployment
Prepared for deployment on Render. Use `npm start` in the `server` directory for production. Ensure all environment variables are added to the Render dashboard.
