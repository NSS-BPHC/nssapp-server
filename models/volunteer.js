const mongoose = require('mongoose');

const { Schema } = mongoose;

const volunteerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  dateOfJoining: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Volunteeer', volunteerSchema);