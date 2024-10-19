import axios from "axios";

const API_KEY = "92e80f120a80cea972a0a5d84676d273";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
  }
};