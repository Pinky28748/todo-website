const express = require("express");
const itemsController = require("../controllers/itemsController");
const itemsRouter = express.Router();

itemsRouter.post("/todos", itemsController.postTodoItems);
itemsRouter.get("/todos",itemsController.getTodoItems);


module.exports = itemsRouter;