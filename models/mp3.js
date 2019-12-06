const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  track = {
    type: Number,
    min: 1,
    max: 99
  },
  performer = { 
    type: String,
    required: true
  },
  title = { 
    type: String,
    required: true
  },
  encodingRate: Number
});

module.exports = mongoose.model('MP3', schema);
