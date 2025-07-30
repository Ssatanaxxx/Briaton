import { memo, useEffect, useCallback } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const menuItems = [
    "Люстры", "Светильники", "Бра и подсветки", "Споты", "Настольные лампы",
    "Торшеры", "Трековые системы", "Уличное освещение", "Офисное освещение", "Лампочки", "Светодиоидная подсветка"
];

const BurgerMenu = memo(({ isOpen, onClose }: Props) => {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
            return () => { document.body.style.overflow = ''; };
        }
    }, [isOpen]);

    const handleLinkClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        onClose();
    }, [onClose]);

    return (
        <div className="burger-container">
            {isOpen && (
                <div
                    className="burger-backdrop"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <div className={`burger-sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="burger-nav">
                    <h2 className="header_burger-title">Каталог Товаров</h2>
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
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