"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavoriteRecipesStore } from "../store/store";

export default function Recipe({ recipe }) {
  const savedRecipes = useFavoriteRecipesStore(
    (state) => state.favoriteRecipes
  );
  const addToFavorites = useFavoriteRecipesStore((state) => state.addRecipe);
  const removeFromFavorites = useFavoriteRecipesStore(
    (state) => state.removeFromFavorites
  );

  const isRecipeSaved = savedRecipes.some((item) => item.id === recipe.id);

  const handleSaveRecipe = () => {
    if (isRecipeSaved) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div className='my-2 relative max-w-[300px] max-h-[200px] rounded-2xl shadow-xl transform hover:scale-110 ease-in duration-200'>
      <Link href={`/recipes/${recipe.id}`}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={300}
          height={200}
          className='absolte left-0 rounded-2xl object-cover'
        />
        <p className='absolute bottom-0 left-1/2 transform translate-x-[-50%] h-[40%] px-2 w-full z-5 font-semibold text-[15px] text-white text-center flex justify-center items-center'>
          {recipe.title}
        </p>
      </Link>
      <div className='absolute top-2 right-2 z-5 cursor-pointer p-1.5 bg-gray-50 shadow-lg rounded-lg text-gray-900'>
        <div onClick={handleSaveRecipe}>
          {isRecipeSaved ? (
            <MdFavorite size={24} className='text-red-600' />
          ) : (
            <MdFavoriteBorder size={24} />
          )}
        </div>
      </div>
    </div>
  );
}
