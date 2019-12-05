const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  codePoint: { type: Number, min: 0 }
});

module.exports = mongoose.model('Unichar', schema);
