import { CallBack } from './HeaderBottom/CallBack/CallBack';
import { Navigation } from './HeaderBottom/Navigation/Navigation';
import { Auth } from './HeaderTop/Auth/Auth';
import { BurgerMenu } from './HeaderTop/BurgerMenu/BurgerMenu';
import { Busket } from './HeaderTop/Busket/Busket';
import { CitySelector } from './HeaderTop/CitySelector/CitySelector';
import { Logo } from './HeaderTop/Logo/Logo';

export const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__top">
                    <Logo />
                    <BurgerMenu menuItems={[]} />
                    <CitySelector />
                    <Busket />
                    <Auth />
                </div>
                <div className="header__bottom">
                    <Navigation />
                    <CallBack />
                </div>
            </div>
        </header>
    );
};