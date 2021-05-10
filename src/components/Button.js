import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ movie, text, onClick }) => {
  return (
    <button onClick={() => onClick(movie)} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  movie: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
