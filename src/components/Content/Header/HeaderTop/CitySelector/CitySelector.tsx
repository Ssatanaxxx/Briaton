import IconLocation from '../../../../../assets/images/sprite/icon-location.svg?react'
import IconArrowButton from '../../../../../assets/images/sprite/icon-arrow-bottom.svg?react'
import { FC, useState, useEffect, useRef } from 'react';

interface City {
  id: string;
  title: string; // Как в вашем db.json
}

export const CitySelector: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity && savedCity !== 'null') {
      setCurrentCity(JSON.parse(savedCity));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCity', JSON.stringify(currentCity));
  }, [currentCity]);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setCities(data.cityDropdown || []);
        setCurrentCity(data.cityDropdown[0]);
      } catch (err) {
        setError('Не удалось загрузить города');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const filteredCities = cities.filter(city =>
    city.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) return <div className="city-selector__error">{error}</div>;
  if (isLoading) return <div className="city-selector__loading">Загрузка...</div>;




  return (
    <>
      <IconLocation width={24} height={24} />
      <span className='location__text'>Ваш город:</span>
      <div className="city-selector">
        {isOpen ? (
          <div className="location__text">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Найти город..."
              className="location__city"
            />
          </div>
        ) : (
          <button
            ref={buttonRef}
            className="location__city"
            onClick={() => setIsOpen(true)}
            aria-label="Выбрать город"
          >
            {currentCity?.title || 'Выберите город'}
            <IconArrowButton className='location__arrow' width={9} height={6} aria-hidden="true" />
          </button>

        )}

        {isOpen && (
          <div className="city-selector__dropdown">
            {filteredCities.length > 0 ? (
              <ul className="city-selector__list">
                {filteredCities.map(city => (
                  <li
                    key={city.id}
                    className="city-selector__item"
                    onClick={() => {
                      setCurrentCity(city);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    {city.title}
                    <IconArrowButton />

                  </li>
                ))}
              </ul>
            ) : (
              <div className="city-selector__empty">Город не найден</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};