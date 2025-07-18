import { lazy, Suspense } from 'react';
import IconLogo from '../../assets/sprite/icon-logo.svg?react';

const LazyOverlay = lazy(() => import("../../components/ui/Overlay/Overlay"))
const LazyBurgerMenuButton = lazy(() => import("../../components/ui/BurgerMenu/BurgerMenuButton"))
const LazyLocation = lazy(() => import("../../components/ui/Location/Location"))
const LazyBusket = lazy(() => import("../../components/ui/Cart/Cart"))
const LazyAccount = lazy(() => import("../../auth/AuthForm/Account"))


const Header = () => {
    return (
        <div className="container">
            <div className="header__container">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="header__top">
                        <IconLogo className="header__logo-link" width={140} height={26} aria-hidden="true" />
                        <LazyBurgerMenuButton />
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