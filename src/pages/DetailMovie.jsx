import React from "react";
import { Link } from "react-router-dom";

const DetailMoview = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
      </Link>
    </div>
  );
};

export default DetailMoview;
