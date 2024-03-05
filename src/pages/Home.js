import React from "react";
import { useState, useEffect } from "react";
import Movie from '../components/Movie';
import Poster from "../components/Poster";


const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=92f8b953924986d58342cb1af16cf22c`

const Home = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovie(data.results)
      })
  }, [])

  return (
    <div>
      <div>
        <Poster />
      </div>
      <div className="card-container">
        {movie && movie.map((movieReq) =>
          <Movie key={movieReq.id} {...movieReq} />)}
      </div>
    </div>
  )
}

export default Home;