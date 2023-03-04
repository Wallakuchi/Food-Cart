import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./../auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/home";

  const handleLogin = () => {
    login(user);
    // navigate("/home", { replace: true });
    navigate(redirectPath, { replace: true });
  };
  console.log(location);
  return (
    <div>
      <label htmlFor="">
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
