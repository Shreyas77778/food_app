import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">
          Add some delicious food from our restaurants!
        </p>
        <Button className="bg-orange-600 text-white" href="/">
          Browse Restaurants
        </Button>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Button
          onClick={clearCart}
          className="bg-red-500 text-white hover:bg-red-600"
        >
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-gray-200 py-4"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600 text-sm">₹{item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, parseInt(e.target.value))
                  }
                  className="w-16 text-center border rounded py-1"
                />
                <Button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹49</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{cartTotal + 49}</span>
            </div>
          </div>
          <Button
            className="w-full mt-6 bg-orange-600 text-white hover:bg-orange-700"
            href="/checkout"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;