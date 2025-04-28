import { Link } from 'react-router-dom';
import Rating from './Rating';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/restaurant/${restaurant._id}`}>
        <img
          src={restaurant.image || '/images/restaurant-default.jpg'}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{restaurant.name}</h3>
          <div className="flex items-center mb-2">
            <Rating value={restaurant.rating} />
            <span className="ml-2 text-sm text-gray-600">
              ({restaurant.numReviews} reviews)
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            {restaurant.cuisine.join(', ')}
          </p>
          <p className="text-gray-600 text-sm">
            {restaurant.deliveryTime} min • ₹{restaurant.minOrder} min order
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;