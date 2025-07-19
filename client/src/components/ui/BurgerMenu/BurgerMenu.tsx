import { useEffect } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const BurgerMenu = ({ isOpen, onClose }: Props) => {

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div className="burger-container">
            {/* Затемнение фона */}
            {isOpen && (
                <div
                    className="burger-backdrop"
                    onClick={onClose}
                />
            )}

            {/* Само меню */}
            <div className={`burger-sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="burger-nav">
                    <a href="#" onClick={onClose}>Ф__Ч</a>
                    <a href="#" onClick={onClose}>И__Т</a>
                    <a href="#" onClick={onClose}>Г__О</a>
                    <a href="#" onClick={onClose}>З__Д</a>
                    <a href="#" onClick={onClose}>Н__О</a>
                    <a href="#" onClick={onClose}>А__Б</a>
                    <a href="#" onClick={onClose}>Е__А</a>
                    <a href="#" onClick={onClose}>Т__В</a>
                    <a href="#" onClick={onClose}>___И</a>
                    <a href="#" onClick={onClose}>___Т</a>
                    <a href="#" onClick={onClose}>___Ь</a>
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;