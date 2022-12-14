import RecipeList from "../../Components/RecipeList";
import { useFetch } from "../../Hooks/useFetch";
import "./Home.css";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3004/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
