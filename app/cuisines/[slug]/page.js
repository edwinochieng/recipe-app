import React from "react";
import { baseUrl } from "../../../utils/baseUrl";
import Recipe from "../../recipes/Recipe";

const getCuisine = async (cuisine) => {
  const res = await fetch(
    `${baseUrl}/complexSearch?apiKey=${process.env.API_KEY}&&cuisine=${cuisine}&&number=12`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }
  return res.json();
};
export default async function CuisinePage({ params }) {
  const data = await getCuisine(params.slug);
  return (
    <div>
      <h1 className="'text-gray-800 text-[18px] text-center font-semibold'">
        {params.slug} cuisine
      </h1>
      <div className='py-4 flex flex-col md:flex-row justify-center items-center flex-wrap gap-6'>
        {data.results.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
