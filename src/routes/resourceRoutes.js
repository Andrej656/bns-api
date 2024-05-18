// src/routes/resourceRoutes.js

const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

// GET request to get paginated list of resources
router.get('/', resourceController.getResources);

module.exports = router;
