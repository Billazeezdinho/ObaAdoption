const router = require('express').Router();
const { getAllPets, getPetById } = require('../controller/pet');


router.get('/', getAllPets);
router.get('/:id', getPetById);

module.exports = router;
