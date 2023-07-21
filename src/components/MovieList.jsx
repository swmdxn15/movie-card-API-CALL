import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_MOVIE_KEY}`);
      const data = await response.json();
      setMovies(data.Search);
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="movies-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      
      {movies && movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
