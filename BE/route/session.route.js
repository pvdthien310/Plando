const express = require("express");
const router = express.Router();
const sessionController = require('../controller/session.controller');

module.exports = app => {
  router.get("/", sessionController.getAll);
  router.post("/", sessionController.create);

  app.use('/api/session', router)
};
