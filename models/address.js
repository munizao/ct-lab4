const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2
  },  
  zip: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5
  },
});

module.exports = mongoose.model('Address', schema);