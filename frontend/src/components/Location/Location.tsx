import { useState, useEffect } from "react";
import { Location as LocationType, fetchCities } from "../../api/Location";
import "./Location.css";
import { IoIosArrowDown } from "react-icons/io";
import { LuMapPinMinus} from "react-icons/lu";
const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState("Москва");
  const [cities, setCities] = useState<LocationType[]>([]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (error) {
        null;
      }
    };
    loadCities();
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCity = (cityName: string) => {
    setCurrentCity(cityName);
    setIsOpen(false);
  };

  return (
    <div className="header__location location">
      <LuMapPinMinus className="header__location-icon" width={24} height={24} aria-hidden="true" />
      <span className="location__text">Ваш город:</span>
      <div className="location__wrapper">
        <button
          className="location__city"
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span className="current-city">{currentCity}</span>
          <IoIosArrowDown
            width={9}
            height={6}
            aria-hidden="true"
            className={isOpen ? "location__arrow--open" : ""}
          />
        </button>

        {isOpen && (
          <ul className="location__dropdown">
            {cities.map((city) => (
              <li className="location__item" key={city.id}>
                <button
                  className="location__option"
                  onClick={() => handleSelectCity(city.name)}
                >
                  {city.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Location;
