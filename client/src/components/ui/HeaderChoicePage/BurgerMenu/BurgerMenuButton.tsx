import { memo, useCallback } from "react";
import IconMenu from "../../../../assets/sprite/icon-menu.svg?react";

type Props = {
  onClick: () => void;
  isMenuOpen?: boolean;
};

const BurgerMenuButton = memo(({ onClick, isMenuOpen = false }: Props) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
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
      <IconMenu aria-hidden="true" />
      <span className="header__catalog-text">Каталог</span>
    </button>
  );
});

export default BurgerMenuButton;