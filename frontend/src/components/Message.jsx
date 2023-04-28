import React from 'react';

const Message = ({ message }) => {
    return (
        <div>
            <h3>@{message.username} - {message.name}</h3>
            <p>{message.content}</p>
            <small>{message.timestamp}</small>
        </div>
    );
};

export default Message;
