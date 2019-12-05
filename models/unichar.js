const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  codePoint: { type: Number, min: 0 }
});

Unichar = mongoose.model('Unichar', schema);

const unichar = new Unichar({});

module.exports = Unichar;
