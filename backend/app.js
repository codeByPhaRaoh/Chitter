const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://pierreraphael96:HDLnPublvgOuUI77@chitter-challenge.xk79co6.mongodb.net/test')
// ,
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing purposes
