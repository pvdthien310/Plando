
function router(app) {
    require("./account.route")(app);
    require("./todo.route")(app);
    require("./session.route")(app);
    require("./pet.route")(app);
    require("./petType.route")(app);
    require("./meal.route")(app);
  }
  
  module.exports = router;
  