import express from "express";

import userRouter from "./router/userRouter.js";
import cors from 'cors'



const app = express();


app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/user", userRouter);

export default app;