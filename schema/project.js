const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  created: {
    type: Date,
    default: Date.now
  },
  customer: String
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;