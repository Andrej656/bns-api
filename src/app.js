// src/app.js

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
// Import other routes and middleware as needed

const app = express();

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// Add other routes here

// Error handling middleware
app.use(errorHandler);

module.exports = app;
