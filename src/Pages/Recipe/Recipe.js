import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3004/recipes/" + id;

  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">error</p>}
      {isPending && <p className="loading">Loading</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
