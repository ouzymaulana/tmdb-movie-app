import React, { useEffect, useState } from "react";
import { fetchNowPlayingMovies, fetchTopRatedMovies } from "../client";
import DetailMoview from "./DetailMovie/DetailMovie";
import "./DetailMovie/style.css";

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const nowPlayingData = await fetchNowPlayingMovies();
      setNowPlaying(nowPlayingData.results);
      const topRatedData = await fetchTopRatedMovies();
      setTopRated(topRatedData.results);
    };

    getMovies();
  }, []);
  return (
    <div>
      <h1>Now Playing</h1>
      <div className="flex flex-row text-red-400">
        {nowPlaying.map((movie) => (
          <DetailMoview key={movie.id} movie={movie} />
        ))}
      </div>
      <h1>Top Rated</h1>
      <div className="flex">
        {topRated.map((movie) => (
          <DetailMoview key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
