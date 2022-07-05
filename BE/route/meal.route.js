const express = require("express");
const router = express.Router();
const mealController = require('../controller/meal.controller');

module.exports = app => {
  router.get("/", mealController.getAll);
  router.post("/", mealController.create);

  app.use('/api/meal', router)
};
