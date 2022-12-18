"use client";

import React, { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Favourites = createContext();

const initialState = {
  favourites: Cookies.get("favourites")
    ? JSON.parse(Cookies.get("favourites"))
    : { items: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      const newItem = action.payload;
      const existItem = state.favourites.items?.find(
        (item) => item?.id === newItem?.id
      );

      const items = existItem
        ? state.favourites.items?.map((item) =>
            item.title === existItem.title ? newItem : item
          )
        : [...state.favourites.items, newItem];

      Cookies.set("favourites", JSON.stringify({ ...state.favourites, items }));
      return {
        ...state,
        favourites: { ...state.favourites, items },
      };
    }
    case "REMOVE_FROM_FAVOURITES": {
      const items = state.favourites.items?.filter(
        (item) => item?.id !== action.payload?.id
      );
      Cookies.set("favourites", JSON.stringify({ ...state.favourites, items }));
      return {
        ...state,
        favourites: { ...state.favourites, items },
      };
    }
    default:
      return { ...state };
  }
}

export default function FavouritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Favourites.Provider value={{ favourites: state.favourites, dispatch }}>
      {children}
    </Favourites.Provider>
  );
}
