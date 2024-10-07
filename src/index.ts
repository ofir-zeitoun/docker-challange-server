import express from "express";
import cors from "cors";
import httpStatus from "http-status";
import { env } from "./services";

const port = env.port;
const app = express();
app.use(cors());
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library

let startPoint = 1;

app.get("/get-number", (_, res) => {
  const newNumber =
    startPoint + Math.floor((Math.random() * (100 - startPoint)) / 2);
  if (newNumber >= 98) {
    startPoint = 1;
  } else {
    startPoint = newNumber;
  }
  res.status(httpStatus.OK).json(startPoint);
});

app.listen(port, async () => {
  console.log("Server is running on port :", port);
});
