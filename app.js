const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const exerciseRoutes = require('./routes/exerciseRoutes');
const workoutSessionRoutes = require('./routes/workoutSessionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://prakash:prakash@cluster0.bo3uixy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

app.use('/exercises', exerciseRoutes);
app.use('/workout-sessions', workoutSessionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
