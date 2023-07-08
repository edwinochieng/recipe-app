import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteRecipesStore = create(
  persist(
    (set, get) => ({
      favoriteRecipes: [],

      addRecipe: (recipe) => {
        set({ favoriteRecipes: [...get().favoriteRecipes, recipe] });
      },

      removeFromFavorites: (recipeId) => {
        set({
          favoriteRecipes: get().favoriteRecipes.filter(
            (item) => item.id !== recipeId
          ),
        });
      },

      clearStore: () => {
        set({ favoriteRecipes: [] });
      },
    }),
    { name: "favorites" }
  )
);
