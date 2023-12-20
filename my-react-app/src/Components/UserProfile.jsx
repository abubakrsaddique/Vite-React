// UserProfile.jsx
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../Context/authContext';
import { auth } from '../firebase';

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Render a loading state while authentication state is loading
  }

  return (
    <>
      <div className="home">
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {user ? (
          <>
            <p>Welcome, {user.email}!</p>
            <button onClick={signOut}>Sign out</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>

      <h1>User Profile! Protected Route</h1>
    </>
  );
};

export default UserProfile;
