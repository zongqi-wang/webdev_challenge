import React from "react";
import "./moviecards.css";
import Button from "./Button.js";

const Moviecards = (movie) => {
  const info = movie.movie;
  const onClick = () => {
    console.log(info.Title);
  };

  return (
    <div className="movie-card">
      <img src={info.Poster} alt="movie poster"></img>
      <h3 className="title">{info.Title}</h3>
      <h4 className="year">{info.Year}</h4>
      <Button text="Nominate" onClick={onClick}></Button>
    </div>
  );
};

export default Moviecards;
