import { useFetch } from "../../Hooks/useFetch";
import "./Home.css";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
