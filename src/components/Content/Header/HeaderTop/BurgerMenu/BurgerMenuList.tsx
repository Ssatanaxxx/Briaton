import { CSSTransition } from 'react-transition-group';
import { CatalogMenuItem } from '../../../../schemas/schemas';

interface BurgerMenuListProps {
    items: CatalogMenuItem[];
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenuList = ({ items, isOpen, onClose }: BurgerMenuListProps) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="menu"
            unmountOnExit
        >
            <nav
                id="burger-menu-list"
                className=""
                aria-hidden={!isOpen}
            >
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                onClick={onClose}
                                className=""
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </CSSTransition>
    );
};