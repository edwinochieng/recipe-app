import Recipe from "./recipes/Recipe";
import Search from "./search/Search";
import { baseUrl } from "../utils/baseUrl";

const getPopularRecipes = async () => {
  const res = await fetch(
    `${baseUrl}/random?apiKey=${process.env.API_KEY}&&number=8`,
    { cache: "force-cache" }
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
      <div className='mt-8 sm:mt-12 max-w-[1000px] w-full mx-auton'>
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
