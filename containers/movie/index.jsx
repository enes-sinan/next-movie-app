import React from "react";
import FeatureMovie from "@/components/feature_movies/index";

function MovieContainer({ movie }) {
  return <FeatureMovie movie={movie} isCompact={false}></FeatureMovie>;
}

export default MovieContainer;
