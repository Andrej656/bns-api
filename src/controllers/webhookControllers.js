// src/controllers/webhookController.js

// Array to store webhook subscriptions
let subscriptions = [];

// Controller function to subscribe to webhooks
exports.subscribeToWebhook = (req, res) => {
  const { event, callbackUrl } = req.body;
  
  // Add the subscription to the array
  subscriptions.push({ event, callbackUrl });
  
  res.status(201).json({ success: true, message: 'Webhook subscription successful' });
};
