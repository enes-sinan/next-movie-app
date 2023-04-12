const API_URL = "https://api.themoviedb.org/3/";

const fetchMovieApi = async function (pathname, query = "") {
  try {
    const response = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}&language=en-US&page=1&${query}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getCategory = async function (genreId) {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getGenres = async function () {
  return fetchMovieApi("/genre/movie/list");
};

const getPopularMovies = async function () {
  return fetchMovieApi("/movie/popular");
};

const getTopRatedMovies = async function () {
  return fetchMovieApi("/movie/top_rated");
};

const getMovie = async function (movieId) {
  return fetchMovieApi(`/movie/${movieId}`);
};

export { getCategory, getGenres, getPopularMovies, getTopRatedMovies, getMovie };
