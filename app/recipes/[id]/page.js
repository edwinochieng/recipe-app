import React from "react";
import { baseUrl } from "../../../utils/baseUrl";
import Details from "../../../components/Details";
import SimilarRecipes from "../../../components/SimilarRecipes";

const getRecipeDetails = async (id) => {
  const res = await fetch(
    `${baseUrl}/${id}/information?apiKey=${process.env.API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

const getSimilarRecipes = async (id) => {
  const res = await fetch(
    `${baseUrl}/${id}/similar?apiKey=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

export default async function RecipeDetails({ params }) {
  const recipeData = await getRecipeDetails(params.id);
  const similarData = await getSimilarRecipes(params.id);

  const [details, recipes] = await Promise.all([recipeData, similarData]);

  return (
    <div>
      <div>
        <Details data={details} />
      </div>
      <div>
        <SimilarRecipes data={recipes} />
      </div>
    </div>
  );
}
