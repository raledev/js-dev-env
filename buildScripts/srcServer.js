import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const PORT = process.env.port || 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server running on " + PORT);
  open("http://localhost:" + PORT);
});
