const express = require('express');
const router = express.Router();
const WorkoutSession = require('../models/WorkoutSession');

router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const sessions = await WorkoutSession.find({ userId });
        res.json(sessions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { userId, exercises } = req.body;
        const session = new WorkoutSession({ userId, exercises });
        await session.save();
        res.status(201).json(session);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const session = await WorkoutSession.findByIdAndUpdate(id, req.body, { new: true });
        res.json(session);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await WorkoutSession.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
