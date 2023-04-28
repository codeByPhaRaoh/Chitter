const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json({
            success: true,
            data: newMessage,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: -1 });
        res.status(200).json({
            success: true,
            data: messages,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
