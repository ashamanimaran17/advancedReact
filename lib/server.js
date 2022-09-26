const express = require("express");
const config = require("./config.js");
//const serverRender = require("./serverRender");
import { serverRender } from "./serverRender";
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("index", { initialContent });
});
app.listen(config.port, () => {
  console.log("listening at port " + config.port);
});
