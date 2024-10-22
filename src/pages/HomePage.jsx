import React, { useEffect, useState } from "react";
import { fetchNowPlayingMovies, fetchTopRatedMovies } from "../client";
import "./DetailMovie/style.css";
import CardItem from "../conponent/Card";
import Carousel from "../conponent/Carousel";

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const getMovies = async () => {
    const nowPlayingData = await fetchNowPlayingMovies();
    setNowPlaying(nowPlayingData.results);
    const topRatedData = await fetchTopRatedMovies();
    setTopRated(topRatedData.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="px-28 py-20 max-sm:py-2 max-sm:px-2">
      <div>
        <h1 className="text-white text-xl py-5">Top Rated</h1>
        <Carousel data={topRated} />
      </div>
      <h1 className="text-white text-xl py-5">Now Playing</h1>
      <div className="flex flex-wrap items-center md:justify-between max-sm:justify-center gap-3 xl:gap-8 font-conforter">
        {nowPlaying.map((movie) => (
          <CardItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
