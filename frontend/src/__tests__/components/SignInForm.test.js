import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignInForm from '../../components/SignInForm';

test('SignInForm renders correctly and can submit data', () => {
    render(<SignInForm />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });

    fireEvent.click(screen.getByText('Sign In'));

    // Add assertions to check if form submission works as expected
});
