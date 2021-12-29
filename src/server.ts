import express from "express";
import "dotenv/config";

const server = express();

server.get("/", (req, res) => {
  res.send("YT Searcher API");
});

server.listen(3000, () => {
  console.log("Server is running at 3000");
});
