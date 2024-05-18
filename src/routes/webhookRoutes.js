// src/routes/webhookRoutes.js

const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// Route for subscribing to webhooks
router.post('/webhooks/subscribe', webhookController.subscribeToWebhook);

module.exports = router;
