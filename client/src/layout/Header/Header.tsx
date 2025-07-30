import { lazy, Suspense, useState } from 'react';
import IconLogo from '../../assets/sprite/icon-logo.svg?react';

const LazyBurgerMenuButton = lazy(() => import("../../components/ui/HeaderChoicePage/BurgerMenu/BurgerMenuButton"));
const LazyBurgerMenu = lazy(() => import("../../components/ui/HeaderChoicePage/BurgerMenu/BurgerMenu"))
const LazyLocation = lazy(() => import("../../components/ui/HeaderChoicePage/Location/Location"))
const LazyBusket = lazy(() => import("../../components/Cart/Cart"))
const LazyButton = lazy(() => import("../../components/auth/AuthForm/Button"))


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="container">
            <div className="header__container">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="header__top">
                        <IconLogo className="header__logo-link" width={140} height={26} aria-hidden="true" />
                        <LazyBurgerMenuButton onClick={() => setIsMenuOpen(true)} />
                        <LazyBurgerMenu
                            isOpen={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                        />
                        <LazyLocation />
                    </div>
                    <div className="header__bottom">
                        <LazyBusket />
                        <LazyButton title={''} ><div>Войти</div></LazyButton>
                    </div>
                </Suspense>
            </div >

        </div >
    )
}

export default Header;