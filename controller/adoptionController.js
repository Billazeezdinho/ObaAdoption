const AdoptionApplication = require('../models/adoption');
// const pet = require('../models/')

exports.createAdoptionApplication = async (req, res) => {
  const { pet_id, applicant_name, applicant_email } = req.body;
  try {
    const application = await AdoptionApplication.create({
      pet_id,
      applicant_name,
      applicant_email
    });
    res.status(201).json({ 
      message: 'Adoption application created', 
      application_id: application.id });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error creating adoption application', 
      error: err });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const application = await AdoptionApplication.findByPk(id);
    if (!application) {
      return res.status(404).json({ 
        message: 'Application not found' 
      });
    }
    application.status = status;
    await application.save();
    res.json({ 
      message: `Application status updated to ${status}` });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error updating application status', error: err });
  }
};
