import { memo, useCallback } from "react";
import "./BurgerMenu.css";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  onClick: () => void;
  isMenuOpen?: boolean;
};

const BurgerMenuButton = memo(({ onClick, isMenuOpen = false }: Props) => {
  
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button
      className="header__catalog-btn"
      type="button"
      onClick={handleClick}
      aria-label="Открыть меню"
      aria-expanded={isMenuOpen}
      aria-controls="burger-menu"
    >
      <RxHamburgerMenu aria-hidden="true" />
      <span className="header__catalog-text">Каталог</span>
    </button>
  );
});

export default BurgerMenuButton;
