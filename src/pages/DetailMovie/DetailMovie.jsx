import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { getMovieById } from "../../client";
import bioskop from "./../../assets/bioskop1.svg";

const DetailMoview = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  const handleGetDetailMovie = async () => {
    const response = await getMovieById(id);
    if (response.ok) {
      setDetail(response.result);
    }
  };

  useEffect(() => {
    handleGetDetailMovie();
  }, []);
  return (
    <div
      className="h-screen flex py-40"
      style={{
        backgroundImage: `url(${bioskop})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="bg-slate-500 w-full rounded-3xl bg-opacity-75">
        detail
      </div>
    </div>
  );
};

export default DetailMoview;
