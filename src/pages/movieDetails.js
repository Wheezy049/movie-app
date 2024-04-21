import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";

function MovieDetails() {
 const { state } = useLocation();
 const API_IMG = "http://image.tmdb.org/t/p/w500/";
 const { title, release_date, poster_path, overview, id } = state;
 return (
  <div className="movieDetail">
   <div>
    <SideBar />
   </div>
   <div>
    <div className="movieDetail-img">
   <img width={'250px'} height={'370px'} src={API_IMG + poster_path} alt="" />
   </div>
   {/* {id}
   {title}
   {release_date}
   {overview} */}
   </div>
  </div>
 )
}

export default MovieDetails;