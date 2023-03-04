import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import "./NavBar.css";
export const NavBar = () => {
  const { user } = useAuth();
  console.log(user);
  const navSelected = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <nav>
        <NavLink to="home" style={navSelected}>
          Home
        </NavLink>
        <NavLink to="about" style={navSelected}>
          About
        </NavLink>
        <NavLink to="product" style={navSelected}>
          Product
        </NavLink>
        <NavLink to="profile" style={navSelected}>
          Profile
        </NavLink>
        {!user && (
          <NavLink to="login" style={navSelected}>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};
