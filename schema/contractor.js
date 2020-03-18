const mongoose = require('mongoose');

const contractorSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Contractor = mongoose.model('Contractor', contractorSchema);
module.exports = Contractor;