import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the App div', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
});
