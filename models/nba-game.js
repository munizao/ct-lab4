const mongoose = require('mongoose');

const score = new mongoose.Schema({
  type: Number,
  min: 0
});

const schema = new mongoose.Schema({
  tipoff: { 
    type: Date,
    required = true
  },
  teams: [String],
  scores: {
    type: [score],
    required: true,
    maxlength: 2,
    minlength: 2
  }
});

module.exports = mongoose.model('NBAGame', schema);

