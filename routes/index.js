const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Alvaro Condori");
});

module.exports = routes;
