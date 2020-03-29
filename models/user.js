const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model('User', UserSchema);
module.exports = User;

