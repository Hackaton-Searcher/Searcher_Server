import express from "express";
import router from "./routes";
import logger from "morgan";
import "dotenv/config";

const server = express();

server.get("/", (req, res) => {
  res.send("YT Searcher API");
});

const myLogger = logger("combined");
server.use(myLogger);

server.use("/api", router);

server.listen(3000, () => {
  console.log("Server is running at 3000");
});
