import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Products from "./pages/Products";

const router = createBrowserRouter(
  [
    {
      element: <App />, // layout (navbar + outlet)
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/booking", element: <Booking /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ],
  {
    // Vite sets this from your vite.config.ts base ('/RaysLightWebsite/')
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
