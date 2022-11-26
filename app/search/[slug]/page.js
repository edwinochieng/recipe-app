import React from "react";
import { baseUrl } from "../../../utils/baseUrl";
import Recipe from "../../recipes/Recipe";

const getRecipe = async (searchWord) => {
  const res = await fetch(
    `${baseUrl}/complexSearch?apiKey=${process.env.API_KEY}&&query=${searchWord}&&number=5`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};
export default async function SearchPage({ params }) {
  const data = await getRecipe(params.slug);

  return (
    <div>
      <h1 className='text-gray-800 text-[16px] text-center font-semibold'>
        Search results for <span className='font-bold'>{params.slug}</span>
      </h1>
      <div className='py-8 flex flex-col md:flex-row justify-start items-center flex-wrap gap-6'>
        {data.results.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
