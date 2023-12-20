import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUserCredentials((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const { email, password } = userCredentials;
      await auth.signInWithEmailAndPassword(email, password);

      const currentUser = auth.currentUser;

      console.log("currentUser", currentUser);
    } catch (err) {
      setError(err?.message || "Something went wrong!");
      console.log("error", err);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="form">
      </form>
    </div>
  );
};

export default LoginForm;
