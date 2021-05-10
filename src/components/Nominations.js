import React from "react";
import "./nominations.css";
import Button from "./Button.js";

const Nominations = ({ nominations, onDel }) => {
  const noms = nominations;

  return (
    <div className="Nominations">
      <h1>Your Nominations</h1>
      <ul>
        {noms.map((nomination) => (
          <li className="nom" key={nomination.imdbID}>
            <p>{nomination.Title}</p>
            <Button text="X" onClick={onDel} movie={nomination} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominations;
