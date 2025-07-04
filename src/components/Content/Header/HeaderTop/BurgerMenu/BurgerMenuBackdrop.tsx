import { CSSTransition } from 'react-transition-group';

interface BurgerMenuBackdropProps {
    isOpen: boolean;
    onClick: () => void;
}

export const BurgerMenuBackdrop = ({ isOpen, onClick }: BurgerMenuBackdropProps) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="backdrop"
            unmountOnExit
        >
            <div
                className=""
                onClick={onClick}
                aria-hidden="true"
            />
        </CSSTransition>
    );
};