import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.method);
  console.log("-----------");
  res.send(200, "Hello, from /!");
});

export default app;
