import express from "express";
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie } from "../controllers/Movie.controller";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/User.controller";

const router = express.Router();

// User routes
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Movie routes
router.get("/movies", getMovies);
router.get("/movies/:id", getMovieById);
router.post("/movies", createMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;
