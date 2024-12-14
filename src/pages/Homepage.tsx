import Main from "../components/Main";  
import RecommendedMovies from "../components/RecommendedMovies";


export default function Homepage() {
  return (
    <div className="w-full border-red-500">
      <Main />
      <RecommendedMovies />
    </div>
  );
}
