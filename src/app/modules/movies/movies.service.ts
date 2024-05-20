import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const createMovieIntoDB = async (movieData: TMovie) => {
  const result = await Movie.create(movieData);

  return result;
};

export const MovieService = {
  createMovieIntoDB,
};
