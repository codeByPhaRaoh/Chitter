const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    secret: process.env.JWT_SECRET || '4352b49db0879f1e0c5c2511bbb576a941edbab7de3c1b0b7796ffff792b5cc0',
};
