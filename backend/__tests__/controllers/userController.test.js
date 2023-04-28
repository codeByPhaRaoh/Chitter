const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

test('Sign up route', async () => {
    const res = await request(app).post('/api/users/signup').send({
        email: 'test@example.com',
        username: 'testUser',
        password: 'testPassword',
        name: 'Test User',
    });

    expect(res.status).toBe(201);
    expect(res.body.data.user.email).toBe('test@example.com');
    expect(res.body.data.user.username).toBe('testUser');
    expect(res.body.data.user.name).toBe('Test User');

    // Cleanup: delete the test user from the database
    await User.findByIdAndDelete(res.body.data.user._id);
});

test('Sign in route', async () => {
    // First, create a test user
    const user = new User({
        email: 'test@example.com',
        username: 'testUser',
        password: 'testPassword',
        name: 'Test User',
    });
    await user.save();

    const res = await request(app).post('/api/users/signin').send({
        email: 'test@example.com',
        password: 'testPassword',
    });

    expect(res.status).toBe(200);
    expect(res.body.data.user.email).toBe('test@example.com');
    expect(res.body.data.user.username).toBe('testUser');
    expect(res.body.data.user.name).toBe('Test User');

    // Cleanup: delete the test user from the database
    await User.findByIdAndDelete(res.body.data.user._id);
});
