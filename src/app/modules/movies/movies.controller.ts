import { MovieService } from "./movies.service";
import { Request, Response } from "express";

const createMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;
    console.log(movieData);

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

export const MovieController = {
  createMovie,
};
