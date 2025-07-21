import { memo, useEffect, useCallback } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const menuItems = [
    "Ф__Ч", "И__Т", "Г__О", "З__Д", "Н__О",
    "А__Б", "Е__А", "Т__В", "___И", "___Т", "___Ь"
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
                <nav className="burger-nav">
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
                </nav>
            </div>
        </div>
    );
});

export default BurgerMenu;