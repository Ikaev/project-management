const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: String,
  dateStart: {
    type: Date,
    default: Date.now
  },
  dateEnd: Date,
  contractAmount: String,
  contractor: {
    type: Schema.Types.ObjectId,
    ref: 'Contractor',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
});


const Project = model('Project', projectSchema);
module.exports = Project;