const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: String,
  date_start: {
    type: Date,
    default: Date.now
  },
  date_end: Date,
  contract_amount: String,
  contractor: {
    type: Schema.Types.ObjectId,
    ref: 'Contractor'
  },
  created: {
    type: Date,
    default: Date.now
  },
});


const Project = model('Project', projectSchema);
module.exports = Project;