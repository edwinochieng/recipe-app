import Recipe from "./recipes/Recipe";
import Search from "./search/Search";
import { baseUrl } from "../utils/baseUrl";

const getPopularRecipes = async () => {
  const res = await fetch(
    `${baseUrl}/random?apiKey=${process.env.API_KEY}&&number=9`
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

export default async function Home() {
  const data = await getPopularRecipes();

  //console.log(data.recipes);
  return (
    <div className='w-full mx-auto'>
      <Search />
      <div className='mt-6 sm:mt-8'>
        <h1 className='text-gray-800 text-[18px] text-center font-semibold'>
          Popular Picks
        </h1>
        <div className='py-4 flex flex-col md:flex-row justify-center items-center flex-wrap gap-6'>
          {data.recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
