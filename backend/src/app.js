import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/user", userRouter);

export default app;