import { memo, useEffect, useCallback} from "react";
import "./BurgerMenu.css"

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
  "Светодиоидная подсветка", 
  // вынести эту константу в db.json, для него создать хук. Ниже в этом комопненте будет дальнейшее решение
];

const BurgerMenu = memo(({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
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
            <a
              key={item}
              href="#"
              onClick={handleLinkClick}
              className="burger-nav__link"
            >
              {item}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default BurgerMenu;

// ПЛан: Добавляем тот список в db.json
// Далее, создаем кастомный хук для получения меню
// Добавляем в BurgerMenu.tsx

// Примерный вид кастомного хука

// export const ususeMenuItems = () => {
//     const [menuItems, setMenuItems] = useState<String[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<String|null>(null);

//     useEffect(() => {
//         const fetchMenuItems = async () => {
//             try {   
//                 const response = await fetch("https://localhost:4000/menuItems");
//                 if(!response.ok) {
//                     throw new Error("Error loading menu")
//                 }
//                 const data = await response.json();
//                 setMenuItems(data)
//             } catch (error) {
//                 setError(error ? instanceof Error ? error.message : 'Unkown error')
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchMenuItems()
//     }, [menuItems, loading, error])
// }