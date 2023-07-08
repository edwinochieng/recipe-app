"use client";

import Link from "next/link";
import React from "react";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import { useFavoriteRecipesStore } from "../../store/store";
import Recipe from "../../components/Recipe";

export default function Page() {
  const favorites = useFavoriteRecipesStore((state) => state.favoriteRecipes);
  console.log(favorites);
  return (
    <div>
      {favorites?.length === 0 ? (
        <div className=' flex flex-col items-center justify-center pt-28  text-gray-800'>
          <BsEmojiSmileUpsideDownFill size={100} />
          <h1 className='font-semibold text-lg pt-1'>
            No recipe in your Favourites!
          </h1>

          <div className='pt-8 max-w-[180px]'>
            <Link href='/'>
              <button className=' w-full py-2 px-3 bg-gray-800 rounded-lg font-medium text-lg text-gray-200'>
                Explore Recipes
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='py-8 flex flex-col md:flex-row justify-start items-center flex-wrap gap-6'>
          {favorites?.map((recipe) => (
            <Recipe key={recipe?.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
