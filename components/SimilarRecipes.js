"use client";

import React from "react";

import Link from "next/link";

export default function SimilarRecipes({ data }) {
  return (
    <div className='pt-2 pb-4 max-w-[700px] w-full'>
      <h1 className='pb-1 font-semibold text-[16px] text-gray-700'>
        Similar Recipes
      </h1>
      <ul className='pl-6 list-disc text-[15px] font-medium text-gray-600 '>
        {data.map((recipe) => (
          <li key={recipe.title} className='hover:text-gray-400'>
            <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
