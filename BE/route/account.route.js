const express = require("express");
const router = express.Router();
const accountController = require('../controller/account.controller');

module.exports = app => {
  router.get("/", accountController.getAll);
  router.post("/", accountController.create);
  router.post("/sign-in", accountController.SignIn);
  router.get("/:id", accountController.getById);

  app.use('/api/account', router)
};
