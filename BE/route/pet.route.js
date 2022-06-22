const express = require("express");
const router = express.Router();
const petController = require('../controller/pet.controller');

module.exports = app => {
  router.get("/", petController.getAll);
  router.post("/", petController.create);

  app.use('/api/pet', router)
};
