const { Schema, model } = require('mongoose');

const contractorSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  created: {
    type: Date,
    default: Date.now
  },
});


const Contractor = model('Contractor', contractorSchema);
module.exports = Contractor;