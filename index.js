const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.listen(3001, () => {
  console.log(`Server started on port`);
});
