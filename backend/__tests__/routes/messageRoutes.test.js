const request = require('supertest');
const app = require('../app');
const Message = require('../models/Message');

test('GET /messages', async () => {
    // Create a test message
    const testMessage = new Message({
        content: 'Test message',
        username: 'testUser',
        name: 'Test User',
    });
    await testMessage.save();

    const res = await request(app).get('/messages');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);

    // Cleanup: delete the test message from the database
    await Message.findByIdAndDelete(testMessage._id);
});

test('POST /messages', async () => {
    const res = await request(app).post('/messages').send({
        content: 'Test message',
        username: 'testUser',
        name: 'Test User',
    });

    expect(res.status).toBe(201);
    expect(res.body.data.content).toBe('Test message');
    expect(res.body.data.username).toBe('testUser');
    expect(res.body.data.name).toBe('Test User');

    // Cleanup: delete the test message from the database
    await Message.findByIdAndDelete(res.body.data._id);
});
