import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

const Home = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/messages');
            setMessages(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    const handleNewMessage = (newMessage) => {
        setMessages((prevMessages) => [newMessage, ...prevMessages]);
    };

    return (
        <div>
            <h1>Chitter</h1>
            <MessageForm onNewMessage={handleNewMessage} />
            <MessageList messages={messages} />
        </div>
    );
};

export default Home;
