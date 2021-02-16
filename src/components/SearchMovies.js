import React, { useState } from "react";
import MovieCard from "./movieCard";

const SearchMovies = () => {
  //states - input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f16f53e9eed5c8d3af0477e2f90d0c37&language=en-US&query=${query}}`;

    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((data) => setMovies(data.results));
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
