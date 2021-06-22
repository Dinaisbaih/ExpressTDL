const express = require("express");
const cors = require("cors");
const app = express();
const taskRouter = require("./routes/tasks");
const db = require("./db/models");
app.use(express.json());
app.use("/tasks", taskRouter);
app.use(cors());
db.sequelize.sync();

// const PORT = 8080;
app.listen(8000);
