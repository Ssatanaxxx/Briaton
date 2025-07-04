import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { BurgerMenu } from './BurgerMenu';
import { useCatalogMenu } from '@/hooks/useCatalogMenu';

// Мокаем данные и хуки
jest.mock('@/hooks/useCatalogMenu');
jest.mock('@/hooks/useBurgerMenu');

const mockMenuItems = [
    { id: 1, title: 'Люстры', href: '/catalog/1' },
    { id: 2, title: 'Светильники', href: '/catalog/2' }
];

describe('BurgerMenu Component', () => {
    beforeEach(() => {
        (useCatalogMenu as jest.Mock).mockReturnValue({
            data: mockMenuItems,
            isLoading: false,
            error: null
        });
    });

    // Базовый тест рендеринга
    it('renders correctly when closed', () => {
        render(<BurgerMenu menuItems={mockMenuItems} />);

        expect(screen.getByRole('button', { name: /каталог/i })).toBeInTheDocument();
        expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    // Тест открытия/закрытия
    it('toggles menu on button click', async () => {
        const { rerender } = render(<BurgerMenu menuItems={mockMenuItems} />);
        const button = screen.getByRole('button', { name: /каталог/i });

        // Открываем меню
        fireEvent.click(button);
        rerender(<BurgerMenu menuItems={mockMenuItems} />);

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);

        // Закрываем меню
        fireEvent.click(button);
        rerender(<BurgerMenu menuItems={mockMenuItems} />);

        expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    // Тест клика по пункту меню
    it('closes menu when menu item is clicked', () => {
        render(<BurgerMenu menuItems={mockMenuItems} />);
        fireEvent.click(screen.getByRole('button', { name: /каталог/i }));

        const menuItem = screen.getByText('Люстры');
        fireEvent.click(menuItem);

        expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    // Accessibility тест
    it('passes accessibility check', async () => {
        const { container } = render(<BurgerMenu menuItems={mockMenuItems} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    // Тест состояния загрузки
    it('shows loading state', () => {
        (useCatalogMenu as jest.Mock).mockReturnValueOnce({
            data: [],
            isLoading: true,
            error: null
        });

        render(<BurgerMenu menuItems={[]} />);
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    // Тест ошибки
    it('handles error state', () => {
        (useCatalogMenu as jest.Mock).mockReturnValueOnce({
            data: [],
            isLoading: false,
            error: new Error('Failed to load')
        });

        render(<BurgerMenu menuItems={[]} />);
        expect(screen.getByText(/ошибка загрузки/i)).toBeInTheDocument();
    });
});