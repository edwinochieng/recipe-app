"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Favourites } from "../context";
import { TiDeleteOutline } from "react-icons/ti";

export default function Page() {
  const { favourites } = useContext(Favourites);

  const removeFromFavourites = (recipe) => {
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: { ...recipe },
    });
    toast.success("Removed from Favourites!");
  };

  return (
    <div>
      <div className='py-8 flex flex-col md:flex-row justify-start items-center flex-wrap gap-6'>
        {favourites.items?.map((recipe) => (
          <div
            key={recipe.id}
            className='my-2 relative max-w-[300px] max-h-[200px] rounded-2xl shadow-xl transform hover:scale-110 ease-in duration-200'
          >
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
            <div
              className='absolute top-2 right-2 z-5 cursor-pointer p-3 bg-gray-800'
              onClick={() => removeFromFavourites(recipe)}
            >
              <TiDeleteOutline size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
