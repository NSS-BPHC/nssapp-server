const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    withDrawTime: {
        type: Date,
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
