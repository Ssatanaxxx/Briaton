import { lazy, Suspense, useState } from "react";
import BurgerMenuButton from "../../components/UI-Kit/UIBurgerMenuButton/UIBurgerMenuButton";
import "./Header.css";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { IconLogo } from "../../components/UI-Kit/Icons/Icons";
import AuthModal from "../../features/AuthModal";

const LazyBurgerMenu = lazy(
  () => import("../../components/BurgerMenu/BurgerMenu")
);
const LazyLocation = lazy(() => import("../../components/Location/Location"));
const LazyCart = lazy(() => import("../../components/Cart/Cart"));

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="container">
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
              <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                title="Регистрация"
              >
                <RegisterForm />
              </AuthModal>
            )}
          </div>
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
