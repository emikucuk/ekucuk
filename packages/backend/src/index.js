import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { successResponse, errorResponse } from '@ekucuk/shared';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json(successResponse({ status: 'OK', message: 'Backend is running!' }));
});

// Portfolio projects endpoint
app.get('/api/projects', (req, res) => {
  /** @type {import('@ekucuk/shared').Project[]} */
  const projects = [
    { id: 1, title: 'Portfolio Website', tech: 'React, Express' },
    { id: 2, title: 'E-commerce App', tech: 'React, Node.js' },
    { id: 3, title: 'Task Manager', tech: 'React, MongoDB, Express' },
    { id: 4, title: 'Blog Website', tech: 'React, Node.js' },
    { id: 5, title: 'Chat Application', tech: 'React, Node.js' }
  ];
  
  res.json(successResponse(projects));
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json(
      errorResponse('VALIDATION_ERROR', 'All fields are required')
    );
  }

  // Burada email gönderme veya veritabanına kaydetme işlemi yapılabilir
  console.log('Contact form received:', { name, email, message });
  
  res.json(successResponse({ message: 'Message sent successfully!' }));
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});

