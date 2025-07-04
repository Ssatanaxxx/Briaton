// import IconMenu from '../../../assets/images/sprite/icon-menu.svg?react';
import { memo } from 'react';

interface BurgerMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenuButton = memo(({ isOpen, onClick }: BurgerMenuButtonProps) => {
  return (
    <button
      className={"header__catalog-btn"}
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      aria-controls="burger-menu-list"
    >
      {/* <IconMenu classname ="header__logo"/>  */}
      <span className="header__catalog-text">Каталог</span>
      {isOpen && <span className="">×</span>}
    </button>
  );
});