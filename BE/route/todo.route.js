const express = require("express");
const router = express.Router();
const todoController = require('../controller/todo.controller');

module.exports = app => {
  router.get("/", todoController.getAll);
  router.post("/", todoController.create);
  router.post("/set-done/:id",todoController.setIsDone)

  app.use('/api/todo', router)
};
