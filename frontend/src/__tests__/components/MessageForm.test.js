import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MessageForm from '../../components/MessageForm';

test('MessageForm renders correctly and can submit data', () => {
    const onMessageSubmit = jest.fn();
    render(<MessageForm onMessageSubmit={onMessageSubmit} />);

    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello, World!' } });
    fireEvent.click(screen.getByText('Send'));

    expect(onMessageSubmit).toHaveBeenCalledWith('Hello, World!');
});
