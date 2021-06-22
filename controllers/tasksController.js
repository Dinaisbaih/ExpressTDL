const { Task } = require("../db/models");

exports.createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.fetchTask = async (taskId, next) => {
  try {
    const task = await Task.findByPk(taskId);
    return task;
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await req.task.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTasks = async (req, res, next) => {
  try {
    await req.task.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
