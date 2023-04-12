import React from "react";
import FeatureMoviesLoading from "@/components/feature_movies/loading";
import CategoriesLoading from "@/components/categories/loading";
import MovieContainerLoading from "@/components/movie_container/loading";

function Loading() {
  return (
    <div>
      <FeatureMoviesLoading />
      <CategoriesLoading />
      <MovieContainerLoading />
      <MovieContainerLoading />
      <MovieContainerLoading />
    </div>
  );
}

export default Loading;
