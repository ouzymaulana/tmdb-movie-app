import React, { useEffect, useState } from "react";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  searchMovies,
} from "../client";
import "./DetailMovie/style.css";
import CardItem from "../conponent/Card";
import Carousel from "../conponent/Carousel";

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [topRated, setTopRated] = useState([]);

  const getMovies = async () => {
    const nowPlayingData = await fetchNowPlayingMovies();
    setNowPlaying(nowPlayingData.results);
    const topRatedData = await fetchTopRatedMovies();
    setTopRated(topRatedData.results);
  };

  const handleSearch = async (event) => {
    const queryValue = event.target.value;
    setSearchValue(queryValue);

    if (queryValue.length > 0) {
      const results = await searchMovies(queryValue);
      setNowPlaying(results);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="px-28 py-20 max-sm:py-2 max-sm:px-2 h-full">
      <div>
        <h1 className="text-white text-xl py-5">Top Rated</h1>
        <Carousel data={topRated} />
      </div>
      <div className="w-full flex justify-between py-4">
        <h1 className="text-white text-xl py-5">Now Playing</h1>
        <input
          type="text"
          id="default-search"
          class="block w-full max-w-xs px-4 py-2 text-lg font-medium shadow-xs text-white bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
          placeholder="Movie Name"
          autoComplete="off"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-wrap items-center md:justify-between max-sm:justify-center gap-3 xl:gap-8 font-conforter">
        {nowPlaying.map((movie) => (
          <CardItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
