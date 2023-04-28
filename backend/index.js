const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Connect to MongoDB
const connectionString = 'mongodb+srv://pierreraphael96:HDLnPublvgOuUI77@chitter-challenge.xk79co6.mongodb.net/test';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
