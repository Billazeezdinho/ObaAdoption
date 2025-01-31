const router = require('express').Router();
const { getAllPets, getPetById } = require('../controller/pet');


router.get('/Pet/', getAllPets);
router.get('/Pet/:id', getPetById);

module.exports = router;
