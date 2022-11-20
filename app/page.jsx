import Recipe from "./recipes/Recipe";
import Search from "./search/Search";

export default function Home() {
  return (
    <div>
      <Search />
      <div>
        <Recipe />
      </div>
    </div>
  );
}
