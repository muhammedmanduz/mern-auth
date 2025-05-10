import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// API routes
app.use("/api/user", userRoutes);
