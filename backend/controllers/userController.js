const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || config.JWT_SECRET;


exports.signUp = async (req, res) => {
    try {
        const { email, username, password, name } = req.body;

        // Check if the email or username already exists in the database
        const userExists = await User.findOne({ $or: [{ email }, { username }] });

        if (userExists) {
            return res.status(400).json({
                message: 'Email or username already exists.',
            });
        }

        // Create a new user
        const newUser = new User({
            email,
            username,
            password,
            name,
        });

        // Hash the password and save the user to the database
        newUser.password = await bcrypt.hash(newUser.password, 10);
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            data: {
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username,
                name: newUser.name,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


