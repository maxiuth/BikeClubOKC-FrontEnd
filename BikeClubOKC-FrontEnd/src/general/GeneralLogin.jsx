import React from "react";
import { Link, useNavigate } from "react-router";

export default function GeneralLogin() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to the General Login Page</h1>
      <h2>Are you a...</h2>
      <button onClick={() => navigate(<Link to="/login"></Link>)}>
        Parent
      </button>
      <button onClick={() => <Link to="/login"></Link>}>Volunteer</button>
    </>
  );
}
