var express = require("express");
var router = express.Router();

const MODULE_PATH = "/api";

// server home page
router.get(MODULE_PATH + "/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// routes of Modules
const routes = [
  require("./todo/routes/todo.routes"),
  require("./user/routes/user.routes"),
  require("./driver/routes/driver.routes")
];

// use routes on modules
routes.forEach(r => {
  router.use(MODULE_PATH, r);
});

module.exports = router;
