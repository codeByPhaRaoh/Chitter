const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, messageController.createMessage);
router.get('/', messageController.getMessages);

module.exports = router;
