import mongoose, { Document, Schema } from "mongoose";

export interface IMovie extends Document {
  title: string;
  genre: string;
  userId: string;
}

const movieSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const movieModel = mongoose.model<IMovie>("Movie", movieSchema);

export default movieModel;
