import express from "express";
import router from "./routes";
import "dotenv/config";

const server = express();

server.get("/", (req, res) => {
  res.send("YT Searcher API");
});

server.use("/api", router);

server.listen(3000, () => {
  console.log("Server is running at 3000");
});
