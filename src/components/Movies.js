// import Moviecards from "./Moviecards";
import "./Movies.css";
import Button from "./Button.js";

const Movies = ({ movies, onAdd }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="movie-panel">
      <h1>Search Results</h1>

      {movies.map((movie) => (
        <Moviecards
          key={movie.imdbID}
          movie={movie}
          onClick={onAdd}
        ></Moviecards>
      ))}
    </div>
  );
};

const Moviecards = (props) => {
  const info = props.movie;

  return (
    <div className="movie-card">
      <img src={info.Poster} alt="movie poster"></img>
      <h3 className="title">{info.Title}</h3>
      <h4 className="year">{info.Year}</h4>
      <Button movie={info} text="Nominate" onClick={props.onClick}></Button>
    </div>
  );
};

export default Movies;
