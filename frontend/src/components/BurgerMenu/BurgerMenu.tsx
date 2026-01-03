import { memo, useEffect} from "react";
import "./BurgerMenu.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  "Люстры",
  "Светильники",
  "Бра и подсветки",
  "Споты",
  "Настольные лампы",
  "Торшеры",
  "Трековые системы",
  "Уличное освещение",
  "Офисное освещение",
  "Лампочки",
  "Светодиодная подсветка",
];

const BurgerMenu = memo(({ isOpen, onClose }: Props) => {

  const handleLinkClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className="burger-container">
      {isOpen && (
        <div className="burger-backdrop" onClick={onClose} aria-hidden="true" />
      )}

      <div
        className={`burger-sidebar ${isOpen ? "open" : ""}`}
        aria-label="Основное бургерное меню"
        id="burger-menu"
        aria-hidden={!isOpen}
      >
        <ul className="burger-nav">
          <h2 className="header_burger-title">Каталог Товаров</h2>
          {menuItems.map((item) => (
            <li key={item} className="burger-nav__item">
              {" "}
              <a
                onClick={handleLinkClick}
                className="burger-nav__link"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default BurgerMenu;
