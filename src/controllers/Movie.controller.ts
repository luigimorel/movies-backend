import { Request, Response } from "express";
import movieModel from "../models/Movie";

// Get all movies
export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies = await movieModel.find();

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

// Get a specific movie by ID
export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = req.params.id;
    const movie = await movieModel.findById(movieId);

    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
};

// Create a new movie
export const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, genre, userId } = req.body;
    const movie = await movieModel.create({ title, genre, userId });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: "Failed to create movie" });
  }
};

// Update a movie by ID
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = req.params.id;
    const { title, genre, userId } = req.body;

    const movie = await movieModel.findByIdAndUpdate(movieId, { title, genre, userId }, { new: true });

    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update movie" });
  }
};

// Delete a movie by ID
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = req.params.id;
    const movie = await movieModel.findByIdAndDelete(movieId);

    if (movie) {
      res.status(200).json({ message: "Movie deleted successfully" });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
};
