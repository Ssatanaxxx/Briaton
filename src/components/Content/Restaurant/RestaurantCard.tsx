import { Restaurant } from '../../api/api';
import StarIcon from '../../assets/star.svg?react'
import './Restaurant.css';

interface RestaurantCardProps {
    restaurant: Restaurant;
    onRatingChange: (id: string, newRating: number) => void
}

export const RestaurantCard = ({ restaurant, onRatingChange }: RestaurantCardProps) => {
    const handleStarClick = (selectedRating: number) => {
        onRatingChange(restaurant.id, selectedRating);
    };

    const renderStars = () => {
        return Array(5).fill(0).map((_, index) => {
            const starValue = index + 1;
            let fillPercentage = 0;

            if (starValue <= Math.floor(restaurant.rating)) {
                fillPercentage = 100; // Полностью заполненная звезда
            } else if (starValue - 1 < restaurant.rating && restaurant.rating < starValue) {
                fillPercentage = Math.round((restaurant.rating % 1) * 100); // Частично заполненная звезда
            }

            return (
                <div
                    key={index}
                    className="star-container"
                    onClick={() => handleStarClick(starValue)}
                    title={`Rate ${starValue} stars`}
                >
                    <div className="star-background">
                        <StarIcon className="star-empty" />
                    </div>
                    <div
                        className="star-filled"
                        style={{ width: `${fillPercentage}%` }}
                    >
                        <StarIcon className="star-icon" />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="item-card">
            <div className="card">
                <img className="card-image" src={restaurant.url} alt={restaurant.name} />
                <p className="card-text">{restaurant.name}</p>
                <span className="card-undertext">{restaurant.description}</span>
            </div>
            <div className="rating-container">
                <div className="stars-wrapper">
                    {renderStars()}
                </div>
                <span className="rating-value">{restaurant.rating.toFixed(1)}</span>
            </div>
        </div>
    )
}

export default RestaurantCard;