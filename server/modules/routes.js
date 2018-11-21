var express = require("express");
var router = express.Router();

const MODULE_PATH = "/api";

// server home page
router.get(MODULE_PATH + "/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// routes of Modules
const routes = [
  require("./admin/admin.auth.routes"),
  require("./admin/admin.routes"),
  require("./user/user.auth.routes"),
  require("./user/user.routes"),
  require("./driver/driver.routes")
];

// use routes on modules
routes.forEach(r => {
  router.use(MODULE_PATH, r);
});

module.exports = router;
