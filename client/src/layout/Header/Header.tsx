import { lazy, Suspense, useState } from "react";
import IconLogo from "../../assets/sprite/icon-logo.svg?react";
import Button from "../../components/AuthForm/Button";
import BurgerMenuButton from "../../components/ui/BurgerMenu/BurgerMenuButton";
import "./Header.css";
import { LoginForm } from "../../components/AuthForm/LoginForm";

const LazyBurgerMenu = lazy(
  () => import("../../components/ui/BurgerMenu/BurgerMenu")
);
const LazyLocation = lazy(
  () => import("../../components/ui/Location/Location")
);
const LazyBusket = lazy(() => import("../../components/Cart/Cart"));

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
            <LazyBusket />
            <Button
              title="Войти"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <div>Войти</div>
            </Button>

            {isLoginModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <button
                    className="modal-close"
                    onClick={() => setIsLoginModalOpen(false)}
                  >
                    ×
                  </button>
                  <LoginForm />
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
