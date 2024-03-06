import React from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
 const { state } = useLocation();
 const API_IMG = "http://image.tmdb.org/t/p/w500/";
 const { title, release_date, poster_path, overview, id } = state;
 return (
  <div>
   <img width={'250px'} height={'370px'} src={API_IMG + poster_path} alt="" />
   {id}
   {title}
   {release_date}
   {overview}
  </div>
 )
}

export default MovieDetails;