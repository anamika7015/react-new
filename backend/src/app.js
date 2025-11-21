import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import cors from 'cors'

dotenv.config();

const app = express();


app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/user", userRouter);

export default app;