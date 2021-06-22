const express = require("express");

const {
  createTask,
  deleteTask,
  getTasks,
  updateTasks,
  fetchTask,
} = require("../controllers/tasksController");
const router = express.Router();
router.param("taskId", async (req, res, next, taskId) => {
  const task = await fetchTask(taskId, next);
  if (task) {
    req.task = task;
    next();
  } else {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:taskId", deleteTask);
router.put("/:taskId", updateTasks);

module.exports = router;
