const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello NACHITO!");
});

module.exports = routes;
