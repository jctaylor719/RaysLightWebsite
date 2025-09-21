import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow">
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <NavLink to="/" className="text-xl font-bold">
              Ray’s Light
            </NavLink>
          </div>
          <div className="flex gap-4 items-center">
            <NavLink to="/" className="link link-hover">
              Home
            </NavLink>
            <NavLink to="/about" className="link link-hover">
              About
            </NavLink>
            <NavLink to="/products" className="link link-hover">
              Products
            </NavLink>
            <NavLink to="/booking" className="btn btn-primary">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>

      {/* Page content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer (simple placeholder) */}
      <footer className="mt-16 py-8 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Ray’s Light
      </footer>
    </div>
  );
}
