import Recipe from "../components/Recipe";
import Search from "../components/Search";
import { baseUrl } from "../utils/baseUrl";

const getPopularRecipes = async () => {
  const res = await fetch(
    `${baseUrl}/random?apiKey=${process.env.API_KEY}&&number=90`
  );

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  return res.json();
};

export default async function Home() {
  const data = await getPopularRecipes();

  return (
    <div className='w-full mx-auto'>
      <Search recipes={data.recipes} />
      <div className='mt-6 sm:mt-8'>
        <h1 className='text-gray-800 text-[18px] text-center font-semibold'>
          Popular Picks
        </h1>
        <div className='pt-2 pb-6 flex flex-col md:flex-row justify-center items-center flex-wrap gap-x-6'>
          {data.recipes.slice(0, 9).map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
