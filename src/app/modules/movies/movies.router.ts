import express from "express";
import { MovieController } from "./movies.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);

export const MovieRoutes = router;
