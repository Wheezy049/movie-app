import React from "react";
import { useNavigate } from "react-router-dom"

const API_IMG = "http://image.tmdb.org/t/p/w500/";

const Movie = ({ title, release_date, poster_path, overview, id }) => {
  const navigate = useNavigate();
  const onClickMovie = () => {
    console.log(id)
    navigate('/movie', { state: { title, release_date, poster_path, overview, id } })
  }
  return (

    <div className="card-poster" onClick={() => onClickMovie()}>
      <img width={'250px'} height={'370px'} src={API_IMG + poster_path} alt="" />
      <h1>{title}</h1>
      <p>{release_date}</p>
    </div>

  );
};

export default Movie;
