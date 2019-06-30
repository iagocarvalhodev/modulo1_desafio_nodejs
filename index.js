const express = require("express");
const nunjucks = require("nunjucks");

// iniciando o express
const app = express();

// configurando o nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk"); //setando a engine nunjucks

// middleware de verificação se a idade esta sendo passada na rota
const checkQueryMiddleware = (req, res, next) => {
  if (req.query.age) {
    return next();
  } else {
    res.redirect("/");
  }
};

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

app.get("/major", checkQueryMiddleware, (req, res) => {
  return res.send(`Você e maior de idade, sua idade é: ${req.query.age}`);
});
app.get("/minor", checkQueryMiddleware, (req, res) => {
  return res.send(`Você e menor de idade, sua idade é: ${req.query.age}`);
});

app.listen(3001, () => {
  console.log(`Server started on port`);
});
