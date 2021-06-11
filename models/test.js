const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Test', testSchema);
