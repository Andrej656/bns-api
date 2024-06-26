// src/controllers/resourceController.js

const resourceController = require('../controllers/resourceController');
const webhookController = require('../controllers/webhookController');

// Controller to create a new resource
exports.createResource = async (req, res, next) => {
  try {
    // Logic to create the resource

    // After creating the resource, trigger webhook notifications
    await webhookController.triggerWebhook('resource_created', resource);
    
    res.status(201).json({ success: true, message: 'Resource created successfully' });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
// src/controllers/resourceController.js

const Resource = require('../models/resource');

// Controller to get paginated list of resources
exports.getResources = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get page number from query parameter, default to 1
    const limit = parseInt(req.query.limit) || 10; // Get limit from query parameter, default to 10

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < (await Resource.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
    
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }

    results.results = await Resource.find().limit(limit).skip(startIndex).exec();

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
