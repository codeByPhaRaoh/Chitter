import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Post the user data to the backend to register a new user
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', { email: email, username: username, password: password, name: name });
            console.log(response.data);
            setEmail('');
            setUsername('');
            setPassword('');
            setName('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
