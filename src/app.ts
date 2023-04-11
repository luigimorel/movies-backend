import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes/routes";

const app: Application = express();

const dbUrl: string = process.env.MONGO_URI ?? "mongodb://localhost:27017/ifma_test";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(dbUrl);

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", function () {
  console.log("Connected to MongoDB");
});

// Home route
app.get("/api/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: "Welcome to the API\n Please specify a version" });
});

// User routes
app.use("/api/v1", routes);

// Server

export default app;
