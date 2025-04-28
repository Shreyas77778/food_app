import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-600">FoodApp</Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-orange-600">Profile</Link>
              <Link to="/cart" className="hover:text-orange-600">Cart</Link>
              <button 
                onClick={logout}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-orange-600">Login</Link>
              <Link 
                to="/register" 
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;