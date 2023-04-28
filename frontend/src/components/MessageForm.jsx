import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ onMessageCreated }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/messages', { message }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            setMessage('');

            if (onMessageCreated) {
                onMessageCreated(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type your Peep here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;
