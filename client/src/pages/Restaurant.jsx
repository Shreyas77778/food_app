import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/restaurants';
import MenuItem from '../components/restaurant/MenuItem';
import Loader from '../components/common/Loader';
import { useCart } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-gray-600 mb-4">{restaurant.description}</p>
        <div className="flex items-center space-x-4">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            {restaurant.rating} ★
          </span>
          <span className="text-gray-600 text-sm">
            {restaurant.deliveryTime} min delivery
          </span>
          <span className="text-gray-600 text-sm">
            ₹{restaurant.minOrder} minimum order
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <div className="space-y-4">
            {restaurant.menu.map((category) => (
              <div key={category._id} className="mb-8">
                <h3 className="text-lg font-medium mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <MenuItem
                      key={item._id}
                      item={item}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;