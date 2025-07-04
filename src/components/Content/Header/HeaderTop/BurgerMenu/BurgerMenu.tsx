import { useBurgerMenu } from './hooks/useBurgerMenu';
import { BurgerMenuButton } from './BurgerMenuButton';
import { BurgerMenuList } from './BurgerMenuList';
import { BurgerMenuBackdrop } from './BurgerMenuBackdrop';
import { CatalogMenuItem } from '../../../../api/burger';
import { memo } from 'react';

interface BurgerMenuProps {
    menuItems: CatalogMenuItem[];
}

export const BurgerMenu = memo(({ menuItems }: BurgerMenuProps) => {
    const { isOpening, toggleMenu, closeMenu } = useBurgerMenu();

    return (
        <div className="">
            <BurgerMenuButton
                isOpen={isOpening}
                onClick={toggleMenu}
            />

            <BurgerMenuList
                items={menuItems}
                isOpen={isOpening}
                onClose={closeMenu}
            />

            <BurgerMenuBackdrop
                isOpen={isOpening}
                onClick={closeMenu}
            />
        </div>
    );
});