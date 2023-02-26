const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
    default: 'Navrachana University',
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  emailStatus: {
    type: Boolean,
    required: true,
  },
});

const userModel = new mongoose.model('USERS', userSchema);

module.exports = userModel;
