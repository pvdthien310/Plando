const express = require("express");
const router = express.Router();
const petTypeController = require('../controller/petType.controller');

module.exports = app => {
  router.get("/", petTypeController.getAll);
  router.post("/", petTypeController.create);

  app.use('/api/petType', router)
};
