const express = require('express');
const router = express.Router();
const { submitFuelRequest, getAllRequests } = require('../controllers/fuelController');

router.post('/request', submitFuelRequest);
router.get('/requests', getAllRequests);

module.exports = router;
