import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

// create movie
const createMovieIntoDB = async (movieData: TMovie) => {
  const result = await Movie.create(movieData);

  return result;
};

// get all movie
const getAllMovieFromDB = async () => {
  const result = await Movie.find();

  return result;
};

// get specific movie by id
const getSpecificMovieByID = async (id: string) => {
  const result = await Movie.findById(id);

  return result;
};

export const MovieService = {
  createMovieIntoDB,
  getAllMovieFromDB,
  getSpecificMovieByID,
};
