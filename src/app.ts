import "dotenv/config";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

const dbUrl = process.env.MONGO_URI || "";
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose.set("strictQuery", false);

// Connect to MongoDB
mongoose.connect(dbUrl);

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", function () {
  console.log("Connected to MongoDB");
});

// Server
app.listen(port, () =>
  console.log(
    `Server started on port ${port} \nPress CTRL + C to close the connection...\n`
  )
);
