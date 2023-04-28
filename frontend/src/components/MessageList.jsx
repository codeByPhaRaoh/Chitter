import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
        </div>
    );
};

export default MessageList;
