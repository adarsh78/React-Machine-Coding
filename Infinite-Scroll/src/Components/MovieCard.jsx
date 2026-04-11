import React from "react";

const MovieCard = ({ title, description, rating, imageURL }) => {
  const imagePath = `https://image.tmdb.org/t/p/w500${imageURL}`; // poster image path URL

  return (
    <div className="movieCard">
      <img src={imagePath} height={400} />
      <div className="movieInfo">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{rating.toFixed(1)}⭐</p>
      </div>
    </div>
  );
};

export default MovieCard;
