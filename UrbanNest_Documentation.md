# UrbanNest Lifestyle Store - Project Documentation

## 1. Project Overview
**UrbanNest** is a full-stack e-commerce and lifestyle website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to be a premium platform for selling home décor, everyday essentials, and accessories.

### Key Features
- **Premium UI/UX:** Built with React and Vite, utilizing a custom design system, glassmorphism effects, and CSS variables (no Tailwind) for a unique, high-end aesthetic.
- **Product Catalog:** A responsive grid displaying products fetched directly from the MongoDB database.
- **AI Chatbot Integration:** A floating AI assistant located at the bottom right of the screen, powered by the Groq API (`qwen/qwen3.6-27b` model).
- **Customer Query System:** A contact form that captures user inquiries, saves them to the database, and forwards them to an N8N webhook for automated email notifications.
- **Deployment Ready:** The project is modularized into `client` and `server` folders, specifically structured for separate deployment on cloud platforms like Render.

---

## 2. Technology Stack

### Frontend (`client/`)
- **Framework:** React.js 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Styling:** Vanilla CSS (Global CSS Variables)
- **Icons:** React Icons (Feather Icons)

### Backend (`server/`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **AI SDK:** Groq SDK
- **Environment Management:** dotenv

---

## 3. Directory Structure

```text
urbannest/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets (Favicon, etc.)
│   ├── src/                
│   │   ├── assets/         # Images and SVG files
│   │   ├── components/     # Reusable UI components (Hero, Navbar, Chatbot, etc.)
│   │   ├── hooks/          # Custom React hooks (e.g., useScrollToTop)
│   │   ├── pages/          # Full page views (Home, Products, Contact, etc.)
│   │   ├── services/       # API call wrappers (api.js, productService.js)
│   │   ├── styles/         # Global styles and CSS variables
│   │   ├── utils/          # Constants and utility functions
│   │   ├── App.jsx         # Root component and Router setup
│   │   └── main.jsx        # Application entry point
│   └── package.json
│
├── server/                 # Backend Node.js Application
│   ├── config/             # DB connection and env variable configuration
│   ├── controllers/        # Route handler logic (productController, etc.)
│   ├── data/               # Seed scripts and sample data for MongoDB
│   ├── middleware/         # Express middlewares (Error handling, 404s)
│   ├── models/             # Mongoose schemas (Product, CustomerQuery)
│   ├── routes/             # API route definitions
│   ├── services/           # External service integration (Groq API, N8N Webhooks)
│   ├── utils/              # Helper functions (Async handlers, Custom Errors)
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server initialization and listening
│   └── package.json
```

---

## 4. API Endpoints Reference

All backend routes are prefixed with `/api`.

### Products
- `GET /api/products`
  - **Description:** Fetches all active products from the database.
  - **Response:** `200 OK` - Array of product objects.
- `GET /api/products/:id`
  - **Description:** Fetches a single product by its MongoDB ID.
  - **Response:** `200 OK` - Product object.

### Customer Queries
- `POST /api/queries`
  - **Description:** Submits a new customer contact form. Saves to MongoDB and forwards payload to the configured N8N Webhook.
  - **Body Requirements:** `name`, `email`, `subject`, `message`
  - **Response:** `201 Created`

### AI Chatbot
- `POST /api/chatbot/message`
  - **Description:** Receives a user's message from the frontend widget and sends it to the Groq LLM API. Returns the AI's response.
  - **Body Requirements:** `message`
  - **Response:** `200 OK` - Object containing the AI `response` string.

---

## 5. Environment Variables Configuration

To run this project, the following `.env` files must be configured:

### Backend (`server/.env`)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/urbannest
CLIENT_URL=http://localhost:5173
N8N_QUERY_WEBHOOK_URL=https://your-n8n-url.com/webhook/...
N8N_CHATBOT_WEBHOOK_URL=
GROQ_API_KEY=gsk_your_api_key_here
```

### Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:5000/api
VITE_N8N_FORM_URL=https://your-n8n-url.com/form/...
```

---

## 6. Local Development Setup

1. **Database:** Ensure MongoDB is running locally (`sudo systemctl start mongod`) or update `MONGODB_URI` with an Atlas cloud string.
2. **Backend:**
   - Navigate to `server/`
   - Run `npm install`
   - Run `npm run seed` (Optional, to populate sample products)
   - Run `npm run dev` (Starts server on port 5000)
3. **Frontend:**
   - Navigate to `client/`
   - Run `npm install`
   - Run `npm run dev` (Starts client on port 5173)

---

## 7. Deployment Instructions (Render)

Deploying to Render requires creating two separate services from your GitHub repository.

### Web Service (Backend)
- **Root Directory:** `server`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Env Vars:** Add `MONGODB_URI`, `GROQ_API_KEY`, and `N8N_QUERY_WEBHOOK_URL`.

### Static Site (Frontend)
- **Root Directory:** `client`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Env Vars:** Add `VITE_API_URL` (pointing to the live backend URL) and `VITE_N8N_FORM_URL`.
