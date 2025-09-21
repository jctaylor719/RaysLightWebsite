import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

export default function App() {
  return (
    <div
      data-theme="emerald"
      className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-6 p-8"
    >
      <h1 className="text-4xl font-bold">DaisyUI Test</h1>

      <div className="flex gap-4">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      <div
        className="w-40 h-16 rounded grid place-items-center font-semibold"
        style={{ backgroundColor: "hsl(var(--p))", color: "hsl(var(--pc))" }}
      >
        Primary swatch
      </div>

      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            If you see a card with a shadow and **colored** buttons, DaisyUI is
            working!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Action</button>
          </div>
        </div>
      </div>

      {/* extra proof the theme variables are loaded */}
      <div className="p-4 rounded-lg bg-primary text-primary-content">
        Primary swatch
      </div>
      <div className="p-4 rounded-lg bg-secondary text-secondary-content">
        Secondary swatch
      </div>
      <div className="p-4 rounded-lg bg-accent text-accent-content">
        Accent swatch
      </div>
    </div>
  );
}
