import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar.jsx";

export default function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
