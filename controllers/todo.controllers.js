import Todo from "../models/Todo.schema.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, checked } = req.body;
    if (!title) {
      res.status(500).json({
        description: "Title cannot be empty",
        code: 400,
      });
    }
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      checked: req.body.checked
    });
    const todo = await newTodo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      description: error,
      code: 500,
    });
  }
};

export const getAllTodos = async (req, res) => {
  let todoLists;
  try {
    todoLists = await Todo.find(req.params);
    res.status(200).json(todoLists);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAllTodos = async (req, res) => {
  try {
    const deleteAllTodo = await Todo.deleteMany();
    res.status(200).json(deleteAllTodo);
  } catch (err) {
    res.status(500).json({
      description: err,
      code: 500,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};
