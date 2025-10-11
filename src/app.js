import express from "express";
import logger from "#config/logger.js";

const app = express();

app.get("/", (req, res) => {
  logger.info("Devops-API Log");
  res.send(200, "Hello, from /!");
});

export default app;
