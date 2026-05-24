const Contact = require('../models/Contact');

// @desc    Submit new contact inquiry
// @route   POST /api/contacts
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message.' });
    }

    // Save to MongoDB
    const savedContact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Your message has been received. Thank you!',
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all contacts (admin view)
// @route   GET /api/contacts
// @access  Public (restrict in production)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitContactForm, getAllContacts };
