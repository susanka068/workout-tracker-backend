const express = require('express');
const router = express.Router();
const WorkoutTemplate = require('../models/WorkoutTemplate');

router.get('/', async (req, res) => {
    try {
        const templates = await WorkoutTemplate.find();
        res.json(templates);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { userId, name, exercises } = req.body;
        const template = new WorkoutTemplate({ userId, name, exercises });
        await template.save();
        res.status(201).json(template);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const template = await WorkoutTemplate.findByIdAndUpdate(id, req.body, { new: true });
        res.json(template);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await WorkoutTemplate.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
