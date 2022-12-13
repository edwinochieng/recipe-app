"use client";

import React, { createContext, useReducer } from "react";

export const Favourites = createContext();

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);

      const items = existItem
        ? state.items.map((item) =>
            item.title === existItem.title ? newItem : item
          )
        : [...state.items, newItem];

      return {
        ...state,
        items: { ...state.items, items },
      };
    }
    case "REMOVE_FROM_FAVOURITES": {
      const favouriteItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: { ...state.items, favouriteItems },
      };
    }
    default:
      return { ...state };
  }
}

export default function FavouritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Favourites.Provider value={{ items: state.items, dispatch }}>
      {children}
    </Favourites.Provider>
  );
}
