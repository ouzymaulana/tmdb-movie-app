import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { getMovieById } from "../../client";
import bioskop from "./../../assets/bioskop.jpg";

const DetailMoview = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  const handleGetDetailMovie = async () => {
    const response = await getMovieById(id);
    setDetail(response);
  };

  useEffect(() => {
    handleGetDetailMovie();
  }, []);

  return (
    <div
      className="h-screen flex py-40 px-64"
      style={{
        backgroundImage: `url(${bioskop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {detail && (
        <div className="bg-black w-full rounded-3xl bg-opacity-75 p-8 flex gap-8 text-white">
          <img
            className="w-1/3 h-full rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt={detail.title}
          />
          <div className="d flex flex-col justify-center gap-4">
            <p className="text-6xl">{detail.title}</p>
            <p>{detail.release_date}</p>
            <div>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMoview;
