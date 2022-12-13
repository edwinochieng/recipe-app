"use client";

import React from "react";
import FavouritesProvider from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  return (
    <FavouritesProvider>
      <ToastContainer position='bottom-center' autoClose={2500} />
      {children}
    </FavouritesProvider>
  );
}
