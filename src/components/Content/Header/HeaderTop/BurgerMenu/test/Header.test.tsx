import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

jest.mock('./BurgerMenu/BurgerMenu', () => ({
    BurgerMenu: () => <div data-testid="burger-menu" />
}));

describe('Header Component', () => {
    it('renders all main components', () => {
        render(<Header />);

        expect(screen.getByTestId('logo')).toBeInTheDocument();
        expect(screen.getByTestId('burger-menu')).toBeInTheDocument();
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
});