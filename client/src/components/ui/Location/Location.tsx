import IconLocation from "../../../assets/sprite/icon-location.svg?react";
import IconArrowBottom from "../../../assets/sprite/icon-arrow-bottom.svg?react";
import { useState } from "react";
import LocationList from "./LocationList";
import { City } from "../../../api/Location";

const Location = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCity, setCurrentCity] = useState("Москва");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectCity = (cityName: string) => {
        setCurrentCity(cityName);
        setIsOpen(false);
    };

    return (
        <div className="header__location location">
            <IconLocation width={24} height={24} aria-hidden="true" />
            <span className="location__text">Ваш город:</span>
            <div className="location__wrapper">
                <button
                    className="location__city"
                    type="button"
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                >
                    <span className="current-city">{currentCity}</span>
                    <IconArrowBottom
                        width={9}
                        height={6}
                        aria-hidden="true"
                        className={isOpen ? "location__arrow--open" : ""}
                    />
                </button>
                <LocationList
                    city={City}
                    isOpen={isOpen}
                    onSelect={handleSelectCity}
                />
            </div>
        </div>
    );
};

export default Location;