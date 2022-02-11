import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from "uuid"

function Movies() {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={uuidv4()}>
            <h2>{movie.title}</h2>
            <p>Runtime: {movie.time} min.</p>
            <ul>
              {movie.genres.map(genre => {
                return (
                    <li key={uuidv4()}>{genre}</li>
                )
              })}
            </ul>
          </div>
          )} )}
    </div>
  );
}

export default Movies;
