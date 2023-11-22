import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movies }) {
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </ul>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </article>
      ))}
    </>
  );
}

export default MovieCard;