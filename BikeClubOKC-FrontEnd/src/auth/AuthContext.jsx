/**
 * AuthContext manages the user's authentication state by storing a token,
 * It provides functions for the user to register, log in, and log out,
 * all of which update the token in state.
 */

//

import { createContext, useContext, useState } from "react";

// import.meta.env allows us to access environment variables,
// which are defined in a file named .env
const API = import.meta.env.VITE_API;

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [userId, serUserId] = useState(null);

  // Helper: safe JSON parsing to avoid "Unexpected end of JSON input"
  async function safeJson(response) {
    try {
      return await response.json();
    } catch {
      return {};
    }
  }

  const register = async (credentials) => {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    setToken(result.token);
  };

  const loginVolunteer = async (credentials) => {
    const response = await fetch(API + "/users/volunteers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await safeJson(response);
    if (!response.ok) {
      throw Error(result.message);
    }
    setToken(result);
    setRole("volunteer");
    serUserId(result.id);
  };

  const loginParent = async (credentials) => {
    const response = await fetch(API + "/users/parents/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await safeJson(response);
    if (!response.ok) {
      throw Error(result.message);
    }
    setToken(result);
    setRole("parent");
    serUserId(result.userId);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    serUserId(null);
  };

  const value = {
    token,
    role,
    userId,
    register,
    loginVolunteer,
    loginParent,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
