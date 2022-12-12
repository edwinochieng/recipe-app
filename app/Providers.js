"use client";

import React from "react";
import FavouritesProvider from "./context";

export default function Providers({ children }) {
  return <FavouritesProvider>{children}</FavouritesProvider>;
}
