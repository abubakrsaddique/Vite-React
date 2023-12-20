import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../Context/authContext";
import { auth } from "../firebase";

const Home = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <>
      <div className="home">
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>

      <h1>Home</h1>
    </>
  );
};

export default Home;
