const { Pet } = require('../models/pet');

// exports.createPet = async (req, res)=>
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving pets', error: err });
  }
};

exports.getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findByPk(id);
    if (!pet) {
      return res.status(404).json({ 
        message: 'Pet not found' });
    }
    res.json(pet);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error retrieving pet details', 
      error: err });
  }
};
