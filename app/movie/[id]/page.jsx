import React from "react";
import { notFound } from "next/navigation";
import Movies from "@/mocks/movie";
import MovieContainer from "@/containers/movie/index";

import { getMovie } from "@/services/movie";

async function MoviePage({ params }) {
  const movieDetails = await getMovie(params.id);
  // console.log(params);
  // const movieDetails = Movies.results.find((movie) => movie.id.toString() === params.id);
  // console.log(movieDetails);

  !movieDetails ? notFound() : false;

  return <MovieContainer movie={movieDetails} />;
}

export default MoviePage;
