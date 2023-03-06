const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = profileModel;
