const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    gif: String,
    tips: String,
    muscleGroup: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
