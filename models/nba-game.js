const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tipoff: { 
    type: Date,
    required: true
  },
  teams: [String],
  scores: {
    type: [Number],
    default: [0, 0],
    validate: [{ validator: val => val.length === 2, msg: 'There must be exactly two scores.' }, 
      { validator: val => val.every(score => score >= 0), msg: 'There must be no negative scores.' },
      { validator: val => val.every(score => score.isInteger), msg: 'Scores must be integers.' }
    ]
  }
});

module.exports = mongoose.model('NBAGame', schema);

