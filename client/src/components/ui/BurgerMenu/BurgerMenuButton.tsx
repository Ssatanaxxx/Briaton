import IconMenu from "../../../assets/sprite/icon-menu.svg?react";

type Props = {
  onClick: () => void;
};

const BurgerMenuButton = ({ onClick }: Props) => {
  return (
    <button
      className="header__catalog-btn"
      type="button"
      onClick={onClick}
      aria-label="Открыть меню"
    >
      <IconMenu />
      <span className="header__catalog-text">Каталог</span>
    </button>
  );
};

export default BurgerMenuButton;