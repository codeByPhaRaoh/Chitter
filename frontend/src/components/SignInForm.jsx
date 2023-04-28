import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/signin', { email, password });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            setEmail('');
            setPassword('');
            alert('Signed in successfully!');

            // Redirect or update the app state to reflect successful sign-in
        } catch (error) {
            console.error(error);
            alert('Sign in failed: ' + error.message);
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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
