const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    withDrawTime: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organiser: {
        type: String,
        required: true,
    },
    noOfVolunteers: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Event', eventSchema);