import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";

const Logout = () => {
  const { setToken, setUser } = useAuthContext();
  setToken(null);
  setUser(null);
  return <Navigate to="/login" />;
};

export default Logout;
