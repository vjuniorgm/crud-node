<<<<<<< HEAD
const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello NACHITO!");
});

module.exports = routes;
=======
const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = routes;
>>>>>>> 13fd74c98d8ff50fcd088d54197fe2569299421c
