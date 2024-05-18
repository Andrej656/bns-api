const express = require('express');
const router = express.Router();
const bnsController = require('../controllers/bnsController');
const { validateRegisterName } = require('../middleware/validation');

router.post('/register', validateRegisterName, bnsController.registerName);
router.get('/:name', bnsController.getName);
router.put('/:name', bnsController.updateName);
router.delete('/:name', bnsController.deleteName);

module.exports = router;
