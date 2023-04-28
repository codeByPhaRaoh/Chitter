const request = require('supertest');
const app = require('../app');
const Message = require('../models/Message');

test('Create message route', async () => {
    const res = await request(app).post('/messages').send({
        content: 'Hello, World!',
        username: 'testUser',
        name: 'Test User',
    });

    expect(res.status).toBe(201);
    expect(res.body.data.content).toBe('Hello, World!');
    expect(res.body.data.username).toBe('testUser');
    expect(res.body.data.name).toBe('Test User');

    // Cleanup: delete the test message from the database
    await Message.findByIdAndDelete(res.body.data._id);
});
