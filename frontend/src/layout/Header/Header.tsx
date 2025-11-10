import { lazy, Suspense, useState } from "react";
import BurgerMenuButton from "../../components/UI-Kit/BurgerMenuButton/BurgerMenuButton";
import "./Header.css";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { IconLogo } from "../../components/UI-Kit/Icons/Icons";

const LazyBurgerMenu = lazy(
  () => import("../../components/BurgerMenu/BurgerMenu")
);
const LazyLocation = lazy(() => import("../../components/Location/Location"));
const LazyCart = lazy(() => import("../../components/Cart/Cart"));

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="container">
      <div className="header__container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="header__top">
            <IconLogo
              className="header__logo-link"
              width={140}
              height={26}
              aria-hidden="true"
            />
            <BurgerMenuButton onClick={() => setIsMenuOpen(true)} />
            <LazyBurgerMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
            <LazyLocation />
          </div>
          <div className="header__bottom">
            <LazyCart />
            <button
              className="header__user-btn"
              onClick={() => setIsAuthModalOpen(true)}
              aria-label="Войти в аккаунт"
            >
              Войти
            </button>

            {isAuthModalOpen && (
              <div className="modal-overlay auth-modal-overlay">
                <div className="modal auth-modal">
                  <button
                    className="modal-close"
                    onClick={() => setIsAuthModalOpen(false)}
                  >
                    ×
                  </button>
                  <RegisterForm />
                </div>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
