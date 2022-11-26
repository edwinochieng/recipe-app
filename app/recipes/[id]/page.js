import React from "react";
import { baseUrl } from "../../../utils/baseUrl";
import Details from "./Details";
import SimilarRecipes from "./SimilarRecipes";

const getRecipeDetails = async (id) => {
  const res = await fetch(`${baseUrl}/${id}/information`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

const getSimilarRecipes = async (id) => {
  const res = await fetch(`${baseUrl}/${id}/similar`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

export default async function RecipeDetails({ searchParams }) {
  const recipeData = await getRecipeDetails(searchParams.id);
  const similarData = await getSimilarRecipes(searchParams.id);

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
