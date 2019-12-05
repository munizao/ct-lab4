const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  codePoint: { type: Number, min: 0 },
  deprecated: { type: Boolean, default: false}
});

module.exports = mongoose.model('Unichar', schema);
