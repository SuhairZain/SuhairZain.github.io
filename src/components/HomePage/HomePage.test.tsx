import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
    it('renders the name', () => {
        const { getByText } = render(<HomePage />);

        expect(getByText('Suhair Zain')).toBeInTheDocument();
    });

    it('renders the developer and photographer links', () => {
        const { getByText } = render(<HomePage />);

        const developer = getByText('developer');
        expect(developer).toBeInTheDocument();

        const photographer = getByText('photographer');
        expect(photographer).toBeInTheDocument();
    });
});
