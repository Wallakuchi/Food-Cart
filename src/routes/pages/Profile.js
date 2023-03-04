import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };
  return (
    <div>
      Welcome: {user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
