import React from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext.jsx";

export default function NavBar() {
  const { token, logout } = useAuth();
  return (
    <>
      <header>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/users/volunteers/login">
          <p>Login</p>
        </Link>
      </header>
    </>
  );
}
