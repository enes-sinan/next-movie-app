import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movie.json";

import { getCategory, getGenres, getPopularMovies, getTopRatedMovies } from "@/services/movie";

async function HomePage({ params }) {
  let selectedCategory;

  // bu asagıaki yontem orneilmez sebebi
  // birden fazla response varsa bunları
  // bir promise all icinde dondrumek perfonmasnı arttrıyor
  // const { results: popularMovies } = await getPopularMovies();
  // const { results: topRatedMovies } = await getTopRatedMovies();

  const [{ genres: categories }, { results: popularMovies }, { results: topRatedMovies }] = await Promise.all([
    getGenres(),
    getPopularMovies(),
    getTopRatedMovies(),
  ]);
  if (params.category?.length > 0) {
    const { results } = await getCategory(params.category[0]);
    selectedCategory = results;
  }
  console.log(params);
  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{ id: params.category?.[0] ?? "", movies: selectedCategory ? selectedCategory.slice(0, 7) : [] }}
    />
  );
}

export default HomePage;
