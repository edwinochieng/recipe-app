import { create } from "zustand";

export const useFavoriteRecipesStore = create((set, get) => ({
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
}));
