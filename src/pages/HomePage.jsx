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
    <div>
      <div>
        <Carousel data={topRated} />
      </div>
      <h1>Now Playing</h1>
      <div className="flex flex-wrap items-center justify-center gap-20 xl:gap-8 max-sm:gap-6 font-conforter">
        {nowPlaying.map((movie) => (
          <CardItem key={movie.id} movie={movie} />
        ))}
      </div>
      <h1>Top Rated</h1>
      <div className="flex">
        {topRated.map((movie) => (
          <CardItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
