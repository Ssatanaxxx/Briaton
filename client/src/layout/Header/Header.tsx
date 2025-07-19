import { lazy, Suspense, useState } from 'react';
import IconLogo from '../../assets/sprite/icon-logo.svg?react';

const LazyOverlay = lazy(() => import("../../components/ui/Overlay/Overlay"))
const LazyBurgerMenuButton = lazy(() => import("../../components/ui/BurgerMenu/BurgerMenuButton"));
const LazyBurgerMenu = lazy(() => import("../../components/ui/BurgerMenu/BurgerMenu"))
const LazyLocation = lazy(() => import("../../components/ui/Location/Location"))
const LazyBusket = lazy(() => import("../../components/ui/Cart/Cart"))
const LazyAccount = lazy(() => import("../../auth/AuthForm/Account"))


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
                        <LazyOverlay />
                        <LazyLocation />
                    </div>
                    <div className="header__bottom">
                        <LazyBusket />
                        <LazyAccount />
                    </div>
                </Suspense>
            </div>

        </div>
    )
}

export default Header;