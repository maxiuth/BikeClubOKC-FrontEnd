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
        <Link to="/login">
          <p>Login</p>
        </Link>
        <nav>
          {/* <NavLink to="/">Books</NavLink>
          {token ? (
            <>
              <NavLink to="/account">Account</NavLink>
              <a href="#" onClick={logout}>
                Log out
              </a>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )} */}
          <NavLink to="/facilitator">Facilitator</NavLink>
        </nav>
      </header>
    </>
  );
}
