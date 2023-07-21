import React from 'react';
import "./moviecard.css";

function MovieCard({movie}) {
  return (
    <div className="movie-card">
       <div className='movie-title'>
         <h2>{movie.Title}</h2>
       </div>
       <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
       </div>
       <div className="extra-details">
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
       </div>
    </div>
  )
}

export default MovieCard;

