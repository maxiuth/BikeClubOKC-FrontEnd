import React from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext.jsx";

export default function NavBar() {
  const { token, logout } = useAuth();
  return (
    <>
      <header>
        <Link to="/">
          <img src="./books.png" alt="Book Buddy Logo" />
          <p>Book Buddy</p>
        </Link>
        <nav>
          <NavLink to="/">Books</NavLink>
          {token ? (
            <>
              <NavLink to="/account">Account</NavLink>
              <a href="#" onClick={logout}>
                Log out
              </a>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
    </>
  );
}
