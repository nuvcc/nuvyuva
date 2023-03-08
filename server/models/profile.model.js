const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = profileModel;
