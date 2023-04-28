import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageList from '../../components/MessageList';

const messages = [
    {
        _id: '1',
        content: 'Hello, World!',
        user: { name: 'John Doe', username: 'john_doe' },
        createdAt: new Date(),
    },
];

test('MessageList renders messages correctly', () => {
    render(<MessageList messages={messages} />);

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    expect(screen.getByText('@john_doe')).toBeInTheDocument();
});
