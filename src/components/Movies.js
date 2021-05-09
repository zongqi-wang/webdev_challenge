import Moviecards from "./Moviecards";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="movie-panel">
      <h1>Search Results</h1>
      {movies.map((movie) => (
        <Moviecards movie={movie}></Moviecards>
      ))}
    </div>
  );
};

export default Movies;
