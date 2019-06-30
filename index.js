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

// rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log(`Server started on port`);
});
