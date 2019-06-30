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

app.post("/check", (req, res) => {
  if (req.body.age >= 18) {
    // return res.send("maior");
    return res.redirect("/major/?age=" + req.body.age);
  } else {
    return res.redirect("/minor/?age=" + req.body.age);
  }
});

app.get("/major", (req, res) => {
  return res.send(`Você e maior de idade, sua idade é: ${req.query.age}`);
});
app.get("/minor", (req, res) => {
  return res.send(`Você e menor de idade, sua idade é: ${req.query.age}`);
});

app.listen(3001, () => {
  console.log(`Server started on port`);
});
