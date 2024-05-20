import mongoose, { Schema } from "mongoose";
import { TMovie, TReview } from "./movies.interface";

const ReviewSchema: Schema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const MovieSchema: Schema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, required: true, default: false },
  viewCount: { type: Number, required: true, default: 0 },
  reviews: { type: [ReviewSchema], required: true },
  //   slug: { type: String, required: true, unique: true },
});

export const Movie = mongoose.model<TMovie>("Movie", MovieSchema);
