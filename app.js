const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let today = new Date();
  const formattedDate = format(today, "DD-MM-YYYY");
  response.send(formattedDate);
});

app.listen(3009);
module.exports = app;
