import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

server.use(express.json());

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server Started on PORT:${PORT}`);
    });
  } catch (error) {
    console.log("Failed to Connect:", error);
    process.exit(1);
  }
};

startServer();
