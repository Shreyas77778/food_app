import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please login to view your profile</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="mt-1">{user.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <p className="mt-1">{user.address || 'Not provided'}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <Button
          className="bg-gray-600 text-white hover:bg-gray-700"
          href="/profile/edit"
        >
          Edit Profile
        </Button>
        <Button
          onClick={logout}
          className="bg-orange-600 text-white hover:bg-orange-700"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;