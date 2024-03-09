const mongoose = require('mongoose');
const Exercise = require('./Exercise');

const workoutTemplateSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
});

const WorkoutTemplate = mongoose.model('WorkoutTemplate', workoutTemplateSchema);

module.exports = WorkoutTemplate;
