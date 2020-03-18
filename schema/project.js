const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: String,
  date_start: {
    type: Date,
    default: Date.now
  },
  date_end: Date,
  contract_amount: String,
  contractor: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;