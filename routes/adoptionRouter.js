const express = require('express');
const { createAdoptionApplication, updateApplicationStatus } = require('../controller/adoptionController');
const router = express.Router();

router.post('/adoptions/', createAdoptionApplication);
router.put('/adoptions/:id', updateApplicationStatus);

module.exports = router;
