import express, { Application, Request, Response } from "express";
import { MovieRoutes } from "./app/modules/movies/movies.router";

const app: Application = express();

// parser
app.use(express.json());

// router
app.use("/api/v1/movie", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
