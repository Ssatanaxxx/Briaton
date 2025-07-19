import { Location } from "../../../api/Location";

interface LocationListProps {
    city: Location[];
    isOpen: boolean;
    onSelect: (cityName: string) => void;
}

const LocationList = ({ city, isOpen, onSelect }: LocationListProps) => {
    return (
        <ul
            className="location__dropdown"
            style={{ display: isOpen ? "block" : "none" }}
        >
            {city.map((item) => (
                <li className="location__item" key={item.id}>
                    <button
                        className="location__option"
                        onClick={() => onSelect(item.NameCity)}
                        data-city={item.NameCity}
                    >
                        {item.NameCity}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default LocationList;