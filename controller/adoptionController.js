const Adoption = require('../models/adoption');
// const pet = require('../models/')


exports.createAdoptionApplication = async (req, res) => {
  const { pet_id, applicant_name, applicant_email, location } = req.body;


  if (!pet_id || !applicant_name || !applicant_email || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const application = await Adoption.create({
      pet_id,
      applicant_name,
      applicant_email,
      location
    });
    res.status(201).json({ 
      message: 'Adoption application created', 
      data: application.id 
    });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error creating adoption application' + err.message
    });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

 
  const validStatuses = ["Pending", "Approved", "Rejected"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      message: 'Invalid status'
     });
  }

  try {
    const application = await Adoption.findByPk(id);
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
      message: 'Error updating application status' + err.message 
    });
  }
}





























// exports.createAdoptionApplication = async (req, res) => {
//   const { pet_id, applicant_name, applicant_email, location } = req.body;
//   try {
//     const application = await Adoption.create({
//       pet_id,
//       applicant_name,
//       applicant_email,
//       location
//     });
//     res.status(201).json({ 
//       message: 'Adoption application created', 
//       application_id: application.id });
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Error creating adoption application', 
//       error: err });
//   }
// };

// exports.updateApplicationStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   try {
//     const application = await Adoption.findByPk(id);
//     if (!application) {
//       return res.status(404).json({ 
//         message: 'Application not found' 
//       });
//     }
//     application.status = status;
//     await application.save();
//     res.json({ 
//       message: `Application status updated to ${status}` });
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Error updating application status', error: err });
//   }
// };


