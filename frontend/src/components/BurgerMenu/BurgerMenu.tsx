import { memo, useRef } from "react";
import "./BurgerMenu.css";
import useCloseOnOutside from "../../hooks/useCloseOnOutside";

type Props = { isOpen: boolean; onClose: () => void };

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
  const wrapperRef = useRef<HTMLDivElement>(null);

  useCloseOnOutside({ wrapperRef, isOpen, onClose });

  return (
    <div className="burger-container">
      {isOpen && (
        <div className="burger-backdrop" onClick={onClose} aria-hidden="true" />
      )}
      <div
        className={`burger-sidebar ${isOpen ? "open" : ""}`}
        aria-label="Основное бургерное меню"
        ref={wrapperRef}
      >
        <ul className="burger-nav">
          <h2>Каталог Товаров</h2>
          {menuItems.map((item) => (
            <li key={item}>
              <a onClick={onClose} className="burger-nav__link">
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
