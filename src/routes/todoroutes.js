const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todocontroller');
const checkAuth = require('../middleware/check-auth');


router.post('/', checkAuth, todoController.createTodo);


router.get('/', checkAuth, todoController.listTodos);


router.put('/:todoId', checkAuth, todoController.updateTodo);


router.delete('/:todoId', checkAuth, todoController.deleteTodo);

module.exports = router;
