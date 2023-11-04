const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({
      title,
      description,
      
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'To-Do creation failed' });
  }
};

exports.listTodos = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = parseInt(req.query.perPage) || 10;
      const skip = (page - 1) * perPage;
      const todos = await Todo.find()
        .skip(skip)
        .limit(perPage);

      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'To-Do listing failed' });
    }
  };
  
  exports.updateTodo = async (req, res) => {
    try {
      const todoId = req.params.todoId;
      const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        { $set: req.body },
        { new: true } 
      );
  
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: 'To-Do update failed' });
    }
  };

  exports.deleteTodo = async (req, res) => {
    try {
      const todoId = req.params.todoId;
      await Todo.findByIdAndRemove(todoId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'To-Do deletion failed' });
    }
  };
  
  