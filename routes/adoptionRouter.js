const express = require('express');
const { createAdoptionApplication, updateApplicationStatus } = require('../controller/adoptionController');
const router = express.Router();

router.post('/', createAdoptionApplication);
router.put('/:id', updateApplicationStatus);

module.exports = router;
