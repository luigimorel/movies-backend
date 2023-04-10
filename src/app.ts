import "dotenv/config";

import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes/routes";

const app = express();

const dbUrl = process.env.MONGO_URI || "";
const port = process.env.PORT || 3000;

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
app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API\n Please specify a version " });
});

// User routes
app.use("/api/v1", routes);

// Server
app.listen(port, () => console.log(`Server started on port ${port} \nPress CTRL + C to close the connection...\n`));

export default app;
