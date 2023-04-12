import React from "react";

import Movies from "@/mocks/movie.json";
import Genres from "@/mocks/genres.json";

import FeatureMovie from "@/components/feature_movies/index";
import Categories from "@/components/categories/index";
import MoviesSection from "@/components/movie_container";

function HomeContainer({ topRatedMovies = [], popularMovies = [], categories = [], selectedCategory }) {
  return (
    <div>
      <FeatureMovie movie={topRatedMovies?.[0]}></FeatureMovie>
      <Categories categories={categories.slice(6, 11)}></Categories>
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={categories.find((genre) => `${genre.id}` === selectedCategory.id).name}
          movies={selectedCategory.movies}
        ></MoviesSection>
      )}
      <MoviesSection title="Popular Flims" movies={topRatedMovies.slice(1, 7)}></MoviesSection>
      <MoviesSection title="Top Rated Movies" movies={popularMovies.slice(0, 7)}></MoviesSection>
    </div>
  );
}

export default HomeContainer;
