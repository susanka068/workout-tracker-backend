const mongoose = require('mongoose');
const Exercise = require('./Exercise');

const setSchema = new mongoose.Schema({
    type: { type: String, enum: ['warmup', 'regular', 'drop'], required: true },
    weight: { type: Number, required: true },
    reps: { type: Number, required: true },
    closenessToFailure: { type: Number, required: true }
});

const exerciseSetSchema = new mongoose.Schema({
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
    sets: [setSchema]
});

const workoutSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now },
    timePerformed: { type: Number, default: 0 }, // timePerformed in minutes
    exercises: [exerciseSetSchema]
});

const WorkoutSession = mongoose.model('WorkoutSession', workoutSessionSchema);

module.exports = WorkoutSession;
