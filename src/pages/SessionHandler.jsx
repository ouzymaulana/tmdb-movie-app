// src/SessionHandler.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { sessionConfiguration } from "../client";

const SessionHandler = () => {
  const navigate = useNavigate();
  const API_KEY = "YOUR_TMDB_API_KEY"; // Replace with your TMDB API Key
  const BASE_URL = "https://api.themoviedb.org/4";

  useEffect(() => {
    const fetchSessionId = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const requestToken = urlParams.get("request_token");

      if (requestToken) {
        try {
          const response = await sessionConfiguration();

          const sessionId = response.data.session_id;
          // Save session ID in localStorage
          localStorage.setItem("tmdbSessionId", sessionId);

          // Redirect to homepage after successful login
          navigate("/home");
        } catch (error) {
          console.error("Failed to create session:", error);
        }
      }
    };

    fetchSessionId();
  }, [navigate]);

  return null;
};

export default SessionHandler;
