import express from "express"
import bodyParser from "body-parser"
import cors from "cors";
import {config} from "dotenv";
import { connectDB } from "./config/db.js";
import tasks from "./routes/tasks.js"

config();

const app=express();
const PORT=8000||process.env.PORT;
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1",tasks);

app.listen(process.env.PORT,()=>{
  console.log(`server is running on ${process.env.PORT}`)
 
 });


app.get("/", (req, res) =>
  res.send(
    `<h1>Server is Running..Click <a href=${process.env.FRONTEND_URL}>Here </a> </h1>`
  )
);




