import React from 'react';
import { render, screen } from '@testing-library/react';
import { BurgerMenuList } from './BurgerMenuList';

const mockItems = [
    { id: 1, title: 'Люстры', href: '/catalog/1' },
    { id: 2, title: 'Светильники', href: '/catalog/2' }
];

describe('BurgerMenuList Component', () => {
    it('renders menu items correctly', () => {
        render(
            <BurgerMenuList
                items={mockItems}
                isOpen={true}
                onClose={jest.fn()}
            />
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(screen.getByText('Люстры')).toHaveAttribute('href', '/catalog/1');
    });

    it('does not render when closed', () => {
        render(
            <BurgerMenuList
                items={mockItems}
                isOpen={false}
                onClose={jest.fn()}
            />
        );

        expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });
});