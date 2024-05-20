import express from "express";
import { MovieController } from "./movies.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);

router.get("/", MovieController.getAllMovie);

router.get("/:movieId", MovieController.getSpecificMovie);

export const MovieRoutes = router;
