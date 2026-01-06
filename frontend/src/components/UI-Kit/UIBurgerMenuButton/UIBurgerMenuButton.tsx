import "./UIBurgerMenuButton.css";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  onClick: () => void;
  isMenuOpen?: boolean;
};

const UIBurgerMenuButton = ({ onClick, isMenuOpen = false }: Props) => {
  return (
    <button
      className="header__catalog-btn"
      type="button"
      onClick={onClick}
      aria-label="Открыть меню"
      aria-expanded={isMenuOpen}
      aria-controls="burger-menu"
    >
      <RxHamburgerMenu aria-hidden="true" />
      <span className="header__catalog-text">Каталог</span>
    </button>
  );
};

export default UIBurgerMenuButton;
