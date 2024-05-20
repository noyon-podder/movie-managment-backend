import { MovieService } from "./movies.service";
import { Request, Response } from "express";

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;

    const result = await MovieService.createMovieIntoDB(movieData);

    res.status(200).json({
      success: true,
      message: "Movie Create Successfully!!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
      data: err,
    });
  }
};

//get all movie
const getAllMovie = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.getAllMovieFromDB();

    res.status(200).json({
      success: true,
      message: "Movie Create Successfully!!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
      data: err,
    });
  }
};

//get specific  movie
const getSpecificMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.movieId;
    const result = await MovieService.getSpecificMovieByID(movieId);

    res.status(200).json({
      success: true,
      message: "Move get with id!!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
      data: err,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovie,
  getSpecificMovie,
};
