const express = require("express");
const config = require("./config.js");
import { serverRender } from "./serverRender";
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  const initialContent = await serverRender();
  res.render("index", { initialContent });
});
app.listen(config.port, () => {
  console.log("listening at port " + config.port);
});
