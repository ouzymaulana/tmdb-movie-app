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
      params: {
        api_key: `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching detail movies:", error);
  }
};

export const loginConfiguration = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/authentication/token/new`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching detail movies:", error);
  }
};

export const sessionConfiguration = async (requestToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/authentication/session/new`,
      {
        request_token: requestToken,
      },
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching detail movies:", error);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};
