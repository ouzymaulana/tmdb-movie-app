import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import imageNotFound from "./../../assets/imagenotfound.svg";

const CardItem = ({ movie }) => {
  return (
    <div className="w-80 max-sm:w-56 max-sm:h-80 md:has-[420px]: overflow-hidden shadow-lg bg-white rounded-xl">
      <Link to={`/movie/${movie.id}`} className="relative group">
        {movie.poster_path ? (
          <img
            className="w-full h-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img
            className="w-full h-full"
            src={imageNotFound}
            alt="Placeholder"
          />
        )}
        <div className="px-6 py-4 justify-start justify-items-start justify-self-start absolute bottom-0 w-full bg-blue bg-opacity-75 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="font-bold text-xl mb-2 text-white">{movie.title}</div>
          <div className="flex gap-2 text-white">
            <span className="material-icons">visibility</span>
            <p className="text-base">{movie.popularity}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
