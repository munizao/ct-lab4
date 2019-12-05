const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  zip: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5
  },
});

module.exports = mongoose.model('Address', schema);