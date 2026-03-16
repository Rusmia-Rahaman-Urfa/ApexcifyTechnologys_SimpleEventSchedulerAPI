const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using the .env variable
// use process.env.MONGO_URI to keep my password hidden!
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log("🚀 Cloud MongoDB Connected Successfully!"))
    .catch(err => console.error("❌ Connection Error:", err));

// Define Event Schema
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true }, 
    description: String
});

const Event = mongoose.model('Event', eventSchema);

// API Endpoints
app.get('/events', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (err) { res.status(500).send(err); }
});

app.post('/events', async (req, res) => {
    const { title, date, description } = req.body;
    
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
        return res.status(400).json({ message: "Date cannot be in the past!" });
    }

    try {
        const newEvent = new Event({ title, date, description });
        await newEvent.save();
        res.json({ message: "Event Scheduled Successfully!" });
    } catch (err) { res.status(500).send(err); }
});

// Render provides a port automatically; otherwise, it uses 5000 locally.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));