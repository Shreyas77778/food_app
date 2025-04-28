import { useState } from 'react';
import Button from '../common/Button';

const MenuItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          <p className="text-orange-600 font-medium mt-1">₹{item.price}</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-12 text-center border rounded"
          />
          <Button
            onClick={() => onAddToCart(item, quantity)}
            className="bg-orange-600 text-white"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;