import express from "express";
import logger from "#config/logger.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan("combined", {
    stream: { write: message => logger.info(message.trim()) },
  })
);

app.get("/", (req, res) => {
  logger.info("Devops-API Log");
  res.send(200, "Hello, from /!");
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Devops-api is running!" });
});

app.use("/api/auth", router);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default app;
