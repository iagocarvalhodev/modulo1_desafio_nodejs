const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// configurando o nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

app.listen(3001, () => {
  console.log(`Server started on port`);
});
