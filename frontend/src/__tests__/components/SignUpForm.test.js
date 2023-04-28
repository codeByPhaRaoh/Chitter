import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignUpForm from '../../components/SignUpForm';

test('SignUpForm renders correctly and can submit data', () => {
    render(<SignUpForm />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });

    fireEvent.click(screen.getByText('Sign Up'));

});
