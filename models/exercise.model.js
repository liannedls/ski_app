const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  group : { type: String, required: true },
  skill : { type: String, required: true },
  age : { type: String, required: true },
});
exerciseSchema.index({'$**': 'text'});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;