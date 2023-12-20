import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./Context/authContext";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import UserProfile from "./Components/UserProfile";
import NotFound from "./Components/NotFound";

import PublicRoute from "./routes/Public";
import PrivateRoute from "./routes/Private";
import "./app.css";

function App() {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    // You can render a loading state here if authentication state is still loading
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute restricted user={user}><LoginForm /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute user={user}><SignupForm /></PublicRoute>} />
        <Route
          path="/"
          element={
            user ? (
              <PrivateRoute>
                <Route index element={<Home />} />
                <Route path="/profile" element={<UserProfile />} />
              </PrivateRoute>
            ) : (
              <PublicRoute user={user}>
                {/* You can redirect to a login page or handle the case where user is not logged in */}
                <Navigate to="/login" replace />
              </PublicRoute>
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
