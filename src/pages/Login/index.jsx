// src/Login.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginConfiguration } from "../../client";

const Login = () => {
  const [requestToken, setRequestToken] = useState(null);
  const navigate = useNavigate();

  // Generate request token
  const fetchRequestToken = async () => {
    try {
      const response = await loginConfiguration();
      setRequestToken(response.data.request_token);
    } catch (error) {
      console.error("Failed to get request token:", error);
    }
  };

  // Handle login by opening TMDB authentication page
  const handleLogin = () => {
    if (requestToken) {
      window.location.href = `https://www.themoviedb.org/auth/access?request_token=${requestToken}`;
    }
  };

  const checkSession = async () => {
    const sessionId = localStorage.getItem("tmdbSessionId");
    if (sessionId) {
      navigate("/home");
    }
  };

  useEffect(() => {
    fetchRequestToken();
    checkSession();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Login with TMDB</h2>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log in with TMDB
        </button>
      </div>
    </div>
  );
};

export default Login;
