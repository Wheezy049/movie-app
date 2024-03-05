import React from 'react';
import Home from './pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetails from './pages/movieDetails';


function App() {
  return (
    <div>
      <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<MovieDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
