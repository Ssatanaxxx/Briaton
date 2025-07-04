import { Restaurant } from "../../api/api";
import { RestaurantCard } from './RestaurantCard';
import './Restaurant.css';

interface RestaurantCardProps {
    restaurants: Restaurant[];
    onRatingChange: (id: string, newRating: number) => void;
}

export const RestaurantList = ({ restaurants, onRatingChange }: RestaurantCardProps) => {
    return (
        <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onRatingChange={onRatingChange}
                />
            ))}
        </div>
    );
};